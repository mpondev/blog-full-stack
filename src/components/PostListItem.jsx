import { Link } from 'react-router';

import Image from './Image';

const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image path="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum, quas, voluptates, quia quae nemo quos quod quibusdam
          voluptatum facere.
        </p>

        <Link className="text-sm text-blue-800 underline">Read more</Link>
      </div>
    </div>
  );
};

export default PostListItem;
