import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { gql, useMutation } from '@apollo/client';
import { formatDistanceToNowStrict } from 'date-fns';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Link from '../../../components/Link';
import client from '../../../apollo-client';
import Input from '../../../components/Input';
import useVotes from '../../../hooks/useVotes';
import { PollProps } from '../../../types';

export default function Poll({ pollData }: PollProps) {
  const [errors, setErrors] = useState({});
  const { data: session } = useSession();
  const { selected, handleChange } = useVotes({
    answers: pollData.answers,
    multiple: pollData.multiple,
  });
  const router = useRouter();

  const selection = selected.filter((sel) => sel.selected);
  const [vote] = useMutation(VOTE, {
    variables: {
      id: pollData.id,
      selected: selection.map((sel) => sel.body),
      uid: session?.user.uid,
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors as {});
    },
    update() {
      router.push(`/p/${pollData.id}/results`);
    },
  });

  return (
    <div className="container">
      <Head>
        <title>{pollData.title} / Poll App</title>
      </Head>
      <h1 className="font-semibold text-3xl text-center">{pollData.title}</h1>
      <h2 className="text-gray-400 my-2 text-center">
        by {pollData.name} ·{' '}
        {formatDistanceToNowStrict(new Date(pollData.createdAt), {
          addSuffix: true,
        })}
      </h2>
      {errors && Object?.keys(errors)?.length > 0 && (
        <ul className="error">
          {Object?.values(errors)?.map((val: any) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      )}
      <p className="font-semibold">Choose {pollData.multiple && 'at least'} one answer:</p>
      <div className="flex flex-col space-y-1">
        {pollData.answers.map((ans, i) => (
          <Input
            key={ans.body}
            type={pollData.multiple ? 'checkbox' : 'radio'}
            body={ans.body}
            onChange={handleChange}
            selected={selected[i].selected}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between mt-2">
        <button className="button" onClick={() => vote()}>
          Vote
        </button>
        <Link href={`/p/${pollData.id}/results`} passHref>
          <button className="button">Results</button>
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const {
      data: { getPoll },
    } = await client.query({
      query: GET_POLL,
      variables: { id: params?.id },
    });
    return {
      props: { pollData: getPoll },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const GET_POLL = gql`
  query getPoll($id: ID) {
    getPoll(id: $id) {
      id
      title
      answers {
        body
        votes
      }
      multiple
      createdAt
      name
    }
  }
`;

const VOTE = gql`
  mutation vote($id: ID, $selected: [String], $uid: String) {
    vote(id: $id, selected: $selected, uid: $uid) {
      id
    }
  }
`;
