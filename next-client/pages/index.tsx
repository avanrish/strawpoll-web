import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from '../components/Link';

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-2">
        <Head>
          <title>Poll App</title>
        </Head>
        <h1 className="font-semibold text-3xl">Quickly make a Poll!</h1>
        <p className="text-gray-300">
          Here you can create real-time polls for free!
        </p>
        <div className="relative w-48 h-48">
          <Image
            src="/chart.png"
            alt="Pie Chart"
            layout="fill"
            objectFit="contain"
            draggable={false}
          />
        </div>
        <Link href="/create" passHref className="button">
          <p>Make a Poll</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
