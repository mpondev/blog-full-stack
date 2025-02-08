import Comment from './Comment';

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex w-full items-center justify-between gap-8">
        <textarea
          placeholder="Write a comment..."
          className="w-full rounded-xl p-4"
        />
        <button className="rounded-xl bg-blue-800 px-4 py-3 font-medium text-white">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
