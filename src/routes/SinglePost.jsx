import { Link } from 'react-router';

import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';

const SinglePost = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolore dolorum reiciendis necessitatibus.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sint
            optio commodi molestias repudiandae officiis, tempora expedita ipsum
            incidunt laborum totam, corrupti omnis sit nesciunt ab pariatur
            voluptate corporis fugit!
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image path="postImg.jpeg" className="rounded-2xl" w="600" />
        </div>
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
              <Image
                path="userImg.jpeg"
                className="size-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
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

          <PostMenuActions />
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
    </div>
  );
};

export default SinglePost;
