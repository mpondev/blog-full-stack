import { useState } from 'react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

import Image from './Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image path="favicon.svg" alt="Logo" w={32} h={32} />
        <span>mponblog</span>
      </Link>

      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] w-6 origin-left rounded-md bg-black transition-all ease-in-out ${
                isOpen && 'rotate-45'
              }`}
            ></div>
            <div
              className={`h-[3px] w-6 rounded-md bg-black transition-all ease-in-out ${
                isOpen && 'opacity-0'
              }`}
            ></div>
            <div
              className={`h-[3px] w-6 origin-left rounded-md bg-black transition-all ease-in-out ${
                isOpen && '-rotate-45'
              }`}
            ></div>
          </div>
        </div>

        <div
          className={`absolute top-16 flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#e6e6e6] text-lg font-medium transition-all ease-in-out ${
            isOpen ? '-right-0' : '-right-[100%]'
          }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setIsOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setIsOpen(false)}>
            Most Popular
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
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
