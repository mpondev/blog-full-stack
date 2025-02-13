import PropTypes from 'prop-types';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';

import Comment from './Comment';

const fetchComments = async postId => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async newComment => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      toast.error(error.response.data);
    },
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    const data = {
      desc: formData.get('desc'),
    };

    mutation.mutate(data);
  };

  return (
    <div className="mb-12 flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-between gap-8"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full rounded-xl p-4 bg-slate-50"
        />
        <button className="rounded-xl bg-blue-800 px-4 py-3 font-medium text-white">
          Send
        </button>
      </form>
      {isPending ? (
        'Loading...'
      ) : error ? (
        'Error loading comments!'
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {data.map(comment => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Comments;
