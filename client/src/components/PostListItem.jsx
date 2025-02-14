import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { format } from 'timeago.js';

import Image from './Image';

const PostListItem = ({ post }) => {
  return (
    <div className="mb-12 flex flex-col gap-8 xl:flex-row">
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image path={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link
            className="text-blue-800"
            to={`/posts?author=${post.user.username}`}
          >
            {post.user.username}
          </Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>

        <p className="text-sm">{post.desc}</p>

        <Link to={`/${post.slug}`} className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem;
