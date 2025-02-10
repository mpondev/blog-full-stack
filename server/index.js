import 'dotenv/config';
import express from 'express';
import connectDB from './lib/connectDB.js';

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import e from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: err.message || 'Something went wrong!',
    stack: err.stack,
    status: err.status || 500,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
