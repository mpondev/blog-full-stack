import PropTypes from 'prop-types';
import { format } from 'timeago.js';

import Image from './Image';

const Comment = ({ comment }) => {
  return (
    <div className="mb-8 rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            path={comment.user.img}
            className="h-10 w-10 rounded-full object-cover"
            w="40"
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.cratedAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
