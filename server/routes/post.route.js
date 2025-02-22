import express from 'express';
import increaseVisit from '../middlewares/increaseVisit.js';
import {
  createPost,
  deletePost,
  featurePost,
  getPost,
  getPosts,
  uploadAuth,
} from '../controllers/post.controller.js';

const router = express.Router();

router.get('/upload-auth', uploadAuth);

router.get('/', getPosts);
router.get('/:slug', increaseVisit, getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/feature', featurePost);

export default router;
