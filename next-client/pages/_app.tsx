import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { ApolloProvider } from '@apollo/client';

import client from '../apollo-client';
import '../styles/globals.css';
import Header from '../components/Header';

const progress = new ProgressBar({
  size: 4,
  color: '#991B1B',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <Header />
        <main className="flex flex-col bg-[#252525] min-h-[calc(100vh-50px)]">
          <Component {...pageProps} />
        </main>
      </Provider>
    </ApolloProvider>
  );
}
export default MyApp;
