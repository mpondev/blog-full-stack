import ImageKit from 'imagekit';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).send('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).send('User not found!');
  }

  let slug = req.body.title.toLowerCase().split(' ').join('-');

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  res.status(201).send(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).send('Not authenticated!');
  }

  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res.status(403).json('You can delete only your posts!');
  }

  res.status(200).send('Post has been deleted');
};

const imageKit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
};
