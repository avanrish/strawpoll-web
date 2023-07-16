import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { NavLink } from '@/src/utils/fixtures/navLinks';

export const NavigationLink = ({
  link,
  i18nKey,
  icon: Icon,
  disabled,
}: NavLink) => {
  const t = useTranslations('Header');

  return (
    <Link
      href={link}
      className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
      aria-disabled={disabled}
    >
      <span className="w-6 h-6 text-accent">
        <Icon />
      </span>
      <span className="text-neutral">{t(i18nKey)}</span>
    </Link>
  );
};
