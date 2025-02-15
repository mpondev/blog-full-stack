import { useSearchParams } from 'react-router';

import Search from './Search';

const SideMenu = () => {
  const [searchParams, setSerachParams] = useSearchParams();

  const handleFilterChange = evt => {
    if (searchParams.get('sort') !== evt.target.value) {
      setSerachParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: evt.target.value,
      });
    }
  };

  const handleCategoryChange = category => {
    if (searchParams.get('cat') !== category) {
      setSerachParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

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
            onChange={handleFilterChange}
            value="newest"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="size-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-blue-800 bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>

      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('general')}
        >
          All
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('web-design')}
        >
          Web Design
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('development')}
        >
          Development
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('databases')}
        >
          Databases
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('seo')}
        >
          Search Engines
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange('marketiing')}
        >
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
