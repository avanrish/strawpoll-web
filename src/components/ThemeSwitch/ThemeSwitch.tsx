'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { Themes } from '@/src/utils/enums/themes';
import { axiosNext } from '@/src/utils/axios';
import { themeCookieKey } from '@/src/utils/fixtures/config';

import { ThemeSwitchProps } from './ThemeSwitch.type';

export const ThemeSwitch = ({ defaultEnabled }: ThemeSwitchProps) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  const handleChange = async (checked: boolean) => {
    setEnabled(checked);
    document.body.classList.toggle(Themes.Dark);
    await axiosNext('/api/change-theme', {
      params: { [themeCookieKey]: checked ? Themes.Dark : Themes.Light },
    });
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-indigo-600 ui-not-checked:bg-gray-400"
    >
      <span className="inline-flex items-center justify-center h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1">
        {enabled ? (
          <MoonIcon className="h-3 w-3 text-gray-900" />
        ) : (
          <SunIcon className="h-3 w-3 text-yellow-600" />
        )}
      </span>
    </Switch>
  );
};
