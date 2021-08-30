import Head from 'next/head';

export default function NotFound() {
  return (
    <div className="flex flex-col h-[calc(100vh-50px)] justify-center items-center text-white">
      <Head>
        <title>Not Found / Poll App</title>
      </Head>
      <h1 className="text-7xl">404</h1>
      <p className="text-lg">Page not found.</p>
    </div>
  );
}
