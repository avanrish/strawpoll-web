'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSpring, animated } from '@react-spring/web';

import { mobileMenuAnimation } from '@/src/utils/animations/mobileMenu';
import { MobileUpperSection } from '@/src/components/Header/MobileUpperSection';

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [spring] = useSpring(() => mobileMenuAnimation(isVisible), [isVisible]);

  return (
    <div className="">
      <button
        className="p-2 rounded-md text-gray-400 hover:bg-base-200 transition-all focus:ring-2 focus:ring-primary"
        onClick={() => setIsVisible(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <animated.div
        className="fixed inset-0 max-w-full bg-base-100 h-fit m-2 rounded-md ring-1 ring-gray-300 z-[1]"
        style={spring}
      >
        {/* Upper Section */}
        <MobileUpperSection closeMenu={() => setIsVisible(false)} />
        <div className="divider my-0" />
        {/* Lower Section */}
        <div className="px-5 py-6 space-y-6"></div>
      </animated.div>
    </div>
  );
};
