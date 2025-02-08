import { useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>;
  }

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col gap-6 md:h-[calc(100vh-80px)]">
      <h1 className="text-xl font-light">Create a New Post</h1>

      <form className="mb-6 flex flex-1 flex-col gap-6">
        <button className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">
          Add a cover image
        </button>

        <input
          className="bg-transparent text-4xl font-semibold outline-none"
          type="text"
          placeholder="My Awesome Story"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="rounded-xl bg-white p-2 shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="desc"
          placeholder="A short description"
          className="rounded-xl bg-white p-4 shadow-md"
        ></textarea>

        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />

        <button className="mt-4 w-36 rounded-xl bg-blue-800 p-2 font-medium text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
