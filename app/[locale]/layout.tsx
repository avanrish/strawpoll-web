import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { Header } from '@/src/components/Header/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface IRootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
