import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
import { format } from 'timeago.js';

const fetchPost = async slug => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  console.log(res.data);
  return res.data;
};

const SinglePost = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return 'Loading...';
  if (error) return 'Something went wrong...' + error.message;
  if (!data) return 'Post not found!';

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>

          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>

        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image path={data.img} className="rounded-2xl" w="600" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-6 text-justify lg:text-lg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            necessitatibus accusantium laudantium perspiciatis ab fugit, animi
            corporis laboriosam laborum natus sunt reprehenderit sapiente velit
            placeat iste ea ut illum doloribus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit excepturi dignissimos provident
            cum laborum, tenetur iusto corrupti ex temporibus nulla omnis saepe
            quam praesentium sed error voluptatem. A, iure natus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aperiam dolorem. Natus nobis ipsam, cumque repudiandae magni ipsum
            quia, tenetur iusto voluptate quasi beatae. Maxime et repellat nemo
            quos quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur aliquid id omnis nobis quas illum, quod, harum nihil
            nam ipsum quia et, dignissimos tempore in! Assumenda dicta ratione
            enim amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            consequatur necessitatibus at nihil aliquid magni unde quam
            excepturi, illo quis. Vitae, laudantium iusto nulla dolorem minus
            veniam harum facere adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident fugiat mollitia, aliquid nostrum ullam
            cupiditate tempora incidunt, dolores itaque qui quaerat corrupti
            unde quod veritatis dolore repudiandae! Mollitia, numquam veritatis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            necessitatibus accusantium laudantium perspiciatis ab fugit, animi
            corporis laboriosam laborum natus sunt reprehenderit sapiente velit
            placeat iste ea ut illum doloribus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit excepturi dignissimos provident
            cum laborum, tenetur iusto corrupti ex temporibus nulla omnis saepe
            quam praesentium sed error voluptatem. A, iure natus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aperiam dolorem. Natus nobis ipsam, cumque repudiandae magni ipsum
            quia, tenetur iusto voluptate quasi beatae. Maxime et repellat nemo
            quos quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur aliquid id omnis nobis quas illum, quod, harum nihil
            nam ipsum quia et, dignissimos tempore in! Assumenda dicta ratione
            enim amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            consequatur necessitatibus at nihil aliquid magni unde quam
            excepturi, illo quis. Vitae, laudantium iusto nulla dolorem minus
            veniam harum facere adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident fugiat mollitia, aliquid nostrum ullam
            cupiditate tempora incidunt, dolores itaque qui quaerat corrupti
            unde quod veritatis dolore repudiandae! Mollitia, numquam veritatis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            necessitatibus accusantium laudantium perspiciatis ab fugit, animi
            corporis laboriosam laborum natus sunt reprehenderit sapiente velit
            placeat iste ea ut illum doloribus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit excepturi dignissimos provident
            cum laborum, tenetur iusto corrupti ex temporibus nulla omnis saepe
            quam praesentium sed error voluptatem. A, iure natus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aperiam dolorem. Natus nobis ipsam, cumque repudiandae magni ipsum
            quia, tenetur iusto voluptate quasi beatae. Maxime et repellat nemo
            quos quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur aliquid id omnis nobis quas illum, quod, harum nihil
            nam ipsum quia et, dignissimos tempore in! Assumenda dicta ratione
            enim amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            consequatur necessitatibus at nihil aliquid magni unde quam
            excepturi, illo quis. Vitae, laudantium iusto nulla dolorem minus
            veniam harum facere adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident fugiat mollitia, aliquid nostrum ullam
            cupiditate tempora incidunt, dolores itaque qui quaerat corrupti
            unde quod veritatis dolore repudiandae! Mollitia, numquam veritatis?
          </p>
        </div>

        <div className="sticky top-8 h-max px-4">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  path={data.user.img}
                  className="size-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <div className="flex gap-2">
              <Link>
                <Image path="facebook.svg" />
              </Link>
              <Link>
                <Image path="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuActions post={data} />

          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>

          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>

          <Search />
        </div>
      </div>

      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePost;
