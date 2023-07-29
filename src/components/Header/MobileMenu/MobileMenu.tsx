'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { animated, useSpring } from '@react-spring/web';

import { mobileMenuAnimation } from '@/src/utils/animations/mobileMenu';
import { MobileUpperSection } from '@/src/components/Header/MobileMenu/MobileUpperSection';
import { MobileLowerSection } from '@/src/components/Header/MobileMenu/MobileLowerSection';

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [spring] = useSpring(() => mobileMenuAnimation(isVisible), [isVisible]);

  return (
    <div className="max-lg:ml-auto">
      <button
        className="p-2 rounded-md text-gray-400 hover:bg-gray-100 transition-all focus:ring-2 focus:ring-indigo-500 lg:hidden"
        onClick={() => setIsVisible(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <animated.div
        className="fixed inset-0 max-w-full bg-white h-fit m-2 rounded-md ring-1 ring-gray-300 z-[1] divide-y-2 divide-gray-50 shadow-lg"
        style={spring}
      >
        <MobileUpperSection closeMenu={() => setIsVisible(false)} />
        <MobileLowerSection />
      </animated.div>
    </div>
  );
};
