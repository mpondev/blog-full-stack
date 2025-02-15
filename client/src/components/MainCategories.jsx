import { Link } from 'react-router';
import Search from './Search';

const MainCategories = () => {
  return (
    <div className="hidden items-center justify-center gap-8 rounded-3xl bg-white p-4 shadow-lg md:flex xl:rounded-full">
      <div className="flex flex-1 flex-wrap items-center justify-between">
        <Link
          to="/posts"
          className="rounded-full bg-blue-800 px-4 py-2 text-white"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="rounded-full px-4 py-2 hover:bg-blue-50"
        >
          Marketing
        </Link>
      </div>

      <span className="text-xl font-medium">|</span>

      <Search />
    </div>
  );
};

export default MainCategories;
