import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

import { Header } from '@/src/components/Header';
import { Themes } from '@/src/utils/enums/themes';

import './globals.css';

interface IRootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  const locale = useLocale();
  const themeCookie = cookies().get('theme');

  if (params.locale !== locale) {
    notFound();
  }

  const classNames = ['antialiased'];
  if (themeCookie?.value === Themes.Dark) classNames.push(themeCookie.value);

  return (
    <html lang={locale}>
      <body className={classNames.join(' ')}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
