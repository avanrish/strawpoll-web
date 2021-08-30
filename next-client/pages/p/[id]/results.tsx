import { gql, useQuery } from '@apollo/client';
import { formatDistanceToNowStrict } from 'date-fns';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import Link from '../../../components/Link';
import client from '../../../apollo-client';
import Answer from '../../../components/Answer';
import useColors from '../../../hooks/useColors';
import PieChart from '../../../components/PieChart';

interface IResults {
  pollData: {
    id: string;
    title: string;
    answers: {
      body: string;
      votes: number;
    }[];
    createdAt: string;
    name: string;
    totalVotes: number;
    myVotes: string[];
    totalPeople: number;
  };
  user: {
    name: string;
    email?: string;
    image?: string;
  };
}

export default function Results({ pollData, user }: IResults) {
  const [poll, setPoll] = useState(pollData);
  const colors = useColors(pollData.answers.length);

  const { loading, data } = useQuery(GET_POLL, {
    variables: { id: pollData.id, name: user.name },
    pollInterval: 2500,
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!loading) setPoll(data.getPoll);
  }, [data, loading]);

  return (
    <div className="container">
      <Head>
        <title>Results - {poll.title} / Poll App</title>
      </Head>
      <h1 className="font-semibold text-3xl text-center">{poll.title}</h1>
      <h2 className="text-gray-400 my-2 text-center">
        by {poll.name} ·{' '}
        {formatDistanceToNowStrict(new Date(poll.createdAt), {
          addSuffix: true,
        })}
      </h2>
      <p className="text-gray-400 font-semibold">
        {`The results after ${poll.totalPeople} ${
          poll.totalPeople === 1 ? 'person' : 'people'
        } voted:`}
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Left */}
        <div className="w-full md:max-w-[50%]">
          {poll.answers.map((ans, i) => (
            <Answer
              key={i}
              body={ans.body}
              votes={ans.votes}
              totalVotes={poll.totalVotes}
              myVotes={poll.myVotes}
              color={colors[i]}
            />
          ))}
        </div>
        {/* Right */}
        <div className="flex w-full max-h-[500px] justify-center md:max-w-[50%] md:items-center">
          {poll.totalVotes > 0 ? (
            <div className="flex w-full max-h-[500px] md:max-w-[50%]">
              <PieChart answers={poll.answers} colors={colors} />
            </div>
          ) : null}
        </div>
      </div>
      <p className="text-2xl font-semibold mt-8">
        Total votes: {poll.totalVotes}
      </p>

      <Link href={`/p/${poll.id}`} passHref>
        <button className="button mt-2">Vote</button>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  try {
    const {
      data: { getPoll },
    } = await client.query({
      query: GET_POLL,
      variables: {
        id: context?.params?.id,
        name: session ? session.user?.name : 'guest',
      },
      fetchPolicy: 'network-only',
    });

    return {
      props: {
        pollData: getPoll,
        user: session ? session.user : { name: 'guest' },
      },
    };
  } catch {
    return {
      redirect: {
        permanent: true,
        destination: '/not-found',
      },
    };
  }
};

const GET_POLL = gql`
  query getPoll($id: ID, $name: String) {
    getPoll(id: $id, name: $name) {
      id
      title
      answers {
        body
        votes
      }
      createdAt
      name
      totalVotes
      myVotes
      totalPeople
    }
  }
`;
