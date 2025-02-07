import { Link } from 'react-router';

import Image from './Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <Image path="featured1.jpeg" className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link
          to="/test"
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            path="featured2.jpeg"
            className="aspect-video w-1/3 rounded-3xl object-cover"
          />
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            path="featured3.jpeg"
            className="aspect-video w-1/3 rounded-3xl object-cover"
          />
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            path="featured4.jpeg"
            className="aspect-video w-1/3 rounded-3xl object-cover"
          />
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
