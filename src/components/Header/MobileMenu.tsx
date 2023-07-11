'use client';

import { useState } from 'react';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Routes } from '@/src/utils/enums/routes';
import { Logo } from '@/src/components/Logo/Logo';
import { navLinks } from '@/src/utils/fixtures/navLinks';

export const MobileMenu = () => {
  const t = useTranslations('Header');
  const [visible, setVisible] = useState(false);

  // TODO: Enter and exit animation

  return (
    <div className="">
      <button
        className="p-2 rounded-md text-gray-400 hover:bg-base-200 transition-all focus:ring-2 focus:ring-primary"
        onClick={() => setVisible(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div
        className="fixed inset-0 max-w-full bg-base-100 h-fit m-2 rounded-md ring-1 ring-gray-300 z-[1] transition-all"
        style={!visible ? { display: 'none' } : undefined}
      >
        {/* Upper Section */}
        <div className="px-5 py-7 space-y-7">
          <div className="flex justify-between">
            <Link href={Routes.Home}>
              <Logo className="text-neutral h-6" />
            </Link>
            <button
              className="text-gray-400 hover:bg-base-200 p-2 rounded-md focus:ring-2 focus:ring-primary transition-all"
              onClick={() => setVisible(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {navLinks.map(({ key, link, icon: Icon }) => (
            <Link href={link} className="flex items-center space-x-3" key={key}>
              <span className="w-6 h-6 text-accent">
                <Icon />
              </span>
              <span className="text-neutral">{t(key)}</span>
            </Link>
          ))}
        </div>
        {/* Lower Section */}
        <div></div>
      </div>
    </div>
  );
};
