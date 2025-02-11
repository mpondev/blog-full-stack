import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react';

import Image from './Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then(token => console.log(token));
  }, []);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image path="favicon.svg" alt="Logo" w={32} h={32} />
        <span>mponblog</span>
      </Link>

      <div className="md:hidden">
        <div
          className="cursor-pointer text-3xl"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? 'X' : '☰'}
        </div>

        <div
          className={`absolute top-16 flex h-screen w-full flex-col items-center justify-center gap-8 text-lg font-medium transition-all ease-in-out ${
            isOpen ? '-right-0' : '-right-full'
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
