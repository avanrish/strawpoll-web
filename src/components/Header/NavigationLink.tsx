import Link from 'next-intl/link';

import { INavigationLinkProps } from '@/src/components/Header/types';

export const NavigationLink = ({
  link,
  text,
  icon: Icon,
  disabled,
  isMobile,
}: INavigationLinkProps) => {
  return (
    <Link
      href={link}
      className={`navlink ${isMobile ? 'mobile' : 'desktop'}`}
      aria-disabled={disabled}
    >
      {Icon ? (
        <span className="w-6 h-6 text-accent">
          <Icon />
        </span>
      ) : null}
      <span
        className={`text-neutral ${
          isMobile ? '' : 'lg:text-base-300 lg:text-sm'
        }`}
      >
        {text}
      </span>
    </Link>
  );
};
