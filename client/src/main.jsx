import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Register from './routes/Register.jsx';
import SinglePost from './routes/SinglePost.jsx';
import Write from './routes/Write.jsx';

import MainLayout from './layouts/MainLayout.jsx';

import './index.css';

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/posts" element={<PostListPage />} />
              <Route path="/:posts" element={<SinglePost />} />
              <Route path="/write" element={<Write />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
