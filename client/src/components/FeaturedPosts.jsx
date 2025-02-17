import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'timeago.js';

import Image from './Image';

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: () => fetchPost(),
  });

  if (isPending) return 'Loading...';
  if (error) return 'Something went wrong...' + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {posts[0].img && (
          <Image
            path={posts[0].img}
            className="rounded-3xl object-cover"
            w="895"
          />
        )}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>

        <Link
          to={posts[0].slug}
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {posts[1] && (
          <div className="flex justify-between gap-4 lg:h-1/3">
            {posts[1].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  path={posts[1].img}
                  className="h-full w-full rounded-3xl object-cover"
                  w="298"
                />
              </div>
            )}

            <div className="w-2/3">
              <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">02.</h1>
                <Link className="text-blue-800">{posts[1].category}</Link>
                <span className="text-sm text-gray-500">
                  {format(posts[1].createdAt)}
                </span>
              </div>
              <Link
                to={posts[1].slug}
                className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
              >
                {posts[1].title}
              </Link>
            </div>
          </div>
        )}

        {posts[2] && (
          <div className="flex justify-between gap-4 lg:h-1/3">
            {posts[2].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  path={posts[2].img}
                  className="h-full w-full rounded-3xl object-cover"
                  w="298"
                />
              </div>
            )}

            <div className="w-2/3">
              <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">02.</h1>
                <Link className="text-blue-800">{posts[2].category}</Link>
                <span className="text-sm text-gray-500">
                  {format(posts[2].createdAt)}
                </span>
              </div>
              <Link
                to={posts[2].slug}
                className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
              >
                {posts[2].title}
              </Link>
            </div>
          </div>
        )}

        {posts[3] && (
          <div className="flex justify-between gap-4 lg:h-1/3">
            {posts[3].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  path={posts[3].img}
                  className="h-full w-full rounded-3xl object-cover"
                  w="298"
                />
              </div>
            )}

            <div className="w-2/3">
              <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">02.</h1>
                <Link className="text-blue-800">{posts[3].category}</Link>
                <span className="text-sm text-gray-500">
                  {format(posts[3].createdAt)}
                </span>
              </div>
              <Link
                to={posts[3].slug}
                className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
              >
                {posts[3].title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
