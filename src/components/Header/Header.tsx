import Link from 'next-intl/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Logo } from '@/src/components/Logo/Logo';
import { Routes } from '@/src/utils/enums/routes';

export const Header = () => {
  return (
    <header className="w-full ring-1 ring-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between relative h-16">
        <div className="px-2">
          <Link href={Routes.Home}>
            <Logo className="text-neutral h-6" />
          </Link>
        </div>
        <div className="p-2 rounded-md text-gray-400 hover:bg-base-200 transition-all">
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};
