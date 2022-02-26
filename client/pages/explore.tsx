import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { formatDistanceToNowStrict } from 'date-fns';

import client from '../apollo-client';
import Link from '../components/Link';
import { ExploreProps } from '../types';

export default function Explore({ polls }: ExploreProps) {
  return (
    <div className="container">
      <Head>
        <title>Explore Polls / Poll App</title>
      </Head>
      <h1 className="font-semibold text-3xl text-center">Explore Polls</h1>
      <p className="text-xl font-semibold my-2">Newest Polls</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden">
        {polls?.map((poll) => (
          <Link href={`/p/${poll.id}`} passHref key={poll.id}>
            <div className="p-2 flex flex-row items-center hover:bg-[#252525] rounded-lg space-x-3 transition ease-out">
              <Image src="/chart.png" width={50} height={50} alt="Chart" draggable={false} />
              <div className="flex flex-col max-w-[280px]">
                <h2 className="hover:underline whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {poll.title}
                </h2>
                <p className="text-gray-400">
                  {formatDistanceToNowStrict(new Date(poll.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { getPolls },
  } = await client.query({ query: GET_POLLS, fetchPolicy: 'network-only' });

  return {
    props: {
      polls: getPolls,
    },
  };
};

export const GET_POLLS = gql`
  query getPolls {
    getPolls {
      id
      title
      createdAt
    }
  }
`;
