import PropTypes from 'prop-types';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'timeago.js';
import { toast } from 'react-toastify';

import Image from './Image';

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
      toast.success('Comment deleted successfully');
    },
    onError: error => {
      toast.error(error.response.data);
    },
  });

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
        {user &&
          (comment.user.username === user.username || role === 'admin') && (
            <span
              className="cursor-pointer text-xs text-red-300 hover:text-red-500"
              onClick={() => mutation.mutate()}
            >
              delete
              {mutation.isPending && <span>(in progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default Comment;
