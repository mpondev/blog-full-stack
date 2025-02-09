import { Link } from 'react-router';

import Search from './Search';

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />

      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>

      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/posts" className="underline">
          All
        </Link>
        <Link to="/posts?cat=web-design" className="underline">
          Web Design
        </Link>
        <Link to="/posts?cat=development" className="underline">
          Development
        </Link>
        <Link to="/posts?cat=databases" className="underline">
          Databases
        </Link>
        <Link to="/posts?cat=seo" className="underline">
          Search Engines
        </Link>
        <Link to="/posts?cat=marketing" className="underline">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
