import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth, useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

import Upload from '../components/Upload';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState('');
  const [cover, setCover] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue(prev => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        prev => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async newPost => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: res => {
      toast.success('Post has been created!');
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>;
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    const data = {
      img: cover.filePath || '',
      title: formData.get('title'),
      category: formData.get('category'),
      desc: formData.get('desc'),
      content: value,
    };

    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col gap-6 md:h-[calc(100vh-80px)]">
      <h1 className="text-xl font-light">Create a New Post</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex flex-1 flex-col gap-6">
        <Upload type={'image'} setData={setCover} setProgress={setProgress}>
          <button className="w-max rounded-xl bg-white p-2 text-sm text-gray-500 shadow-md">
            Add a cover image
          </button>
        </Upload>

        <input
          className="bg-transparent text-4xl font-semibold outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="category"
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

        <div className="flex flex-1">
          <div className="mr-2 flex flex-col gap-2">
            <Upload type="image" setData={setImg} setProgress={setProgress}>
              🏞️
            </Upload>
            <Upload type="video" setData={setVideo} setProgress={setProgress}>
              📹
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>

        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="mt-4 w-36 rounded-xl bg-blue-800 p-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {mutation.isPending ? 'Loading...' : 'Send'}
        </button>
        {'Progress: ' + progress + '%'}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
