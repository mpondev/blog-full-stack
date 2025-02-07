import { useState } from 'react';
import { Link } from 'react-router';

import Image from './Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
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
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            isOpen ? '-right-0' : '-right-full'
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
