import Link from 'next-intl/link';

import { NavigationLinkProps } from '@/src/types/Header.types';

export const NavigationLink = ({
  link,
  text,
  icon: Icon,
  disabled,
  isMobile,
}: NavigationLinkProps) => {
  return (
    <Link
      href={link}
      className={`navlink ${isMobile ? 'mobile' : 'desktop'}`}
      aria-disabled={disabled}
    >
      {Icon ? (
        <span className="w-6 h-6 text-indigo-400">
          <Icon />
        </span>
      ) : null}
      <span
        className={`text-gray-900 ${
          isMobile ? '' : 'lg:text-gray-700 lg:text-sm'
        }`}
      >
        {text}
      </span>
    </Link>
  );
};
