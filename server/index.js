import 'dotenv/config';
import express from 'express';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import connectDB from './lib/connectDB.js';

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webHookRouter from './routes/webhook.route.js';

const app = express();
const PORT = 3000;

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use('/webhooks', webHookRouter);
app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || 'Something went wrong!',
    stack: err.stack,
    status: err.status || 500,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
