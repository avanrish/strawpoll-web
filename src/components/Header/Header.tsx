import Link from 'next-intl/link';
import { Logo } from '@/src/components/Logo/Logo';
import { Routes } from '@/src/utils/enums/routes';

export const Header = () => {
  return (
    <header className="w-full ring-1 ring-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between relative h-16">
        <div className="flex items-center">
          <Link href={Routes.Home}>
            <Logo className="text-neutral h-6" />
          </Link>
        </div>
        <div>{/*TODO: Buttons here*/}</div>
      </div>
    </header>
  );
};
