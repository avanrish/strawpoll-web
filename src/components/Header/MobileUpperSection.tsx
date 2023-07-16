import Link from 'next-intl/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Routes } from '@/src/utils/enums/routes';
import { Logo } from '@/src/components/Logo/Logo';
import { navLinks } from '@/src/utils/fixtures/navLinks';
import { NavigationLink } from '@/src/components/Header/NavigationLink';
import { IMobileUpperSectionProps } from '@/src/components/Header/types';

export const MobileUpperSection = ({ closeMenu }: IMobileUpperSectionProps) => {
  return (
    <div className="px-2 pt-5 pb-3 space-y-3">
      <div className="flex justify-between items-center">
        <Link href={Routes.Home} className="px-3">
          <Logo className="text-neutral h-6" />
        </Link>
        <button
          className="text-gray-400 hover:bg-base-200 p-2 rounded-md focus:ring-2 focus:ring-primary transition-all mr-1"
          onClick={closeMenu}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div>
        {navLinks.map(({ i18nKey, link, icon, disabled }) => (
          <NavigationLink
            key={i18nKey}
            i18nKey={i18nKey}
            link={link}
            icon={icon}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};
