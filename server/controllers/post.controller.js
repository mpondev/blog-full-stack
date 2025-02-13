import ImageKit from 'imagekit';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await Post.find()
    .populate('user', 'username')
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;

  res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    'user',
    'username img'
  );
  res.status(200).json(post);
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
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';

  if (role === 'admin') {
    await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json('Post has been deleted');
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

export const featurePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated!');
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';

  if (role !== 'admin') {
    return res.status(403).json('You can not feature posts!');
  }

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).json('Post not found!');
  }

  const isFeatured = post.isFeatured;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      isFeatured: !isFeatured,
    },
    { new: true }
  );

  res.status(200).send(updatedPost);
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
