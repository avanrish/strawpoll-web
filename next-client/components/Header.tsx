import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Link from './Link';

export default function Header() {
  const [active, setActive] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <header className="flex flex-col md:flex-row md:items-center h-[50px] md:justify-between md:px-3 sticky top-0 z-40 bg-white">
      {/* Left - Logo */}
      <div className="flex">
        <Link href="/" passHref>
          <div className="flex p-2 md:p-0 items-center space-x-3 hover:brightness-110 cursor-pointer transition">
            <Image
              src="/chart.png"
              alt="Poll"
              width={32}
              height={32}
              draggable={false}
            />
            <p className="text-2xl font-semibold text-red-800 select-none">
              Poll App
            </p>
          </div>
        </Link>

        <div className="md:hidden ml-auto inline-flex p-3 text-red-800">
          {!active ? (
            <MenuIcon className="w-6 h-6" onClick={() => setActive(true)} />
          ) : (
            <XIcon className="w-6 h-6" onClick={() => setActive(false)} />
          )}
        </div>
      </div>

      {/* Middle - Create & Explore */}
      <div
        className={`${
          active ? 'flex' : 'hidden md:flex'
        } flex-col md:flex-row md:space-x-5 bg-white`}
      >
        <Link href="/create" passHref>
          <p
            className={`link ${router.pathname === '/create' && 'active-link'}`}
          >
            Create Poll
          </p>
        </Link>
        <Link href="/explore" passHref>
          <p
            className={`link ${
              router.pathname === '/explore' && 'active-link'
            }`}
          >
            Explore
          </p>
        </Link>
      </div>

      {/* Right - User */}
      <div
        className={`${
          active ? 'flex' : 'hidden md:flex'
        } flex-col md:flex-row md:space-x-5 md:items-center bg-white`}
      >
        {!loading ? (
          !session ? (
            // Sign In button if user is not logged in
            <p className="link" onClick={() => signIn()}>
              Sign In
            </p>
          ) : (
            <>
              {/* Link to Dashboard if logged in */}
              <Link href="/dashboard" passHref className="flex">
                <p
                  className={`link ${
                    router.pathname === '/dashboard' && 'active-link'
                  }`}
                >
                  {session.user?.name}
                </p>
              </Link>
              {/* Logout Button */}
              <div
                className="flex link md:py-2 md:px-1 space-x-2 md:space-x-0"
                onClick={() => signOut()}
              >
                <span className="md:hidden">Sign Out</span>
                <LogoutIcon className="h-8" />
              </div>
            </>
          )
        ) : null}
      </div>
    </header>
  );
}
