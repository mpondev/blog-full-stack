import PropTypes from 'prop-types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import Comment from './Comment';

const fetchComments = async postId => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return 'Loading...';
  if (error) return 'Something went wrong...' + error.message;

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex w-full items-center justify-between gap-8">
        <textarea
          placeholder="Write a comment..."
          className="w-full rounded-xl p-4 bg-slate-50"
        />
        <button className="rounded-xl bg-blue-800 px-4 py-3 font-medium text-white">
          Send
        </button>
      </div>
      {data.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Comments;
