import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';
import { LogoutIcon } from '@heroicons/react/outline';

import Link from './Link';
import { useRouter } from 'next/router';

export default function Header() {
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <header className="flex items-center h-[50px] justify-between px-3 sticky top-0 z-40 bg-white">
      {/* Left - Logo */}
      <Link href="/" passHref>
        <div className="flex items-center space-x-3 hover:brightness-110 cursor-pointer transition">
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

      {/* Middle - Create & Explore */}
      <div className="flex space-x-5">
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
      <div className="flex space-x-5 items-center">
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
                className="flex h-[50px] border-t-2 pt-1.5 pb-2 px-1 border-transparent hover:border-red-800 text-red-800 hover:text-[#252525] cursor-pointer transiton duration-200 ease-out"
                onClick={() => signOut()}
              >
                <LogoutIcon className="w-10" />
              </div>
            </>
          )
        ) : null}
      </div>
    </header>
  );
}
