import { notFound } from 'next/navigation';

import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { Locales } from '@/src/utils/enums/locales';

import './globals.css';

interface IRootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, params: {locale} }: IRootLayoutProps) {
  if (!Object.values(Locales).includes(locale as any)) notFound();

  return (
    <html lang={locale} className="h-full">
      <body className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 min-h-full flex flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
