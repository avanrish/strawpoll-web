import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

import './globals.css';

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
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
