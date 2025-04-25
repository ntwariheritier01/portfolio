import PostModel from '../models/blog.model.js';
import CategoryModel from '../models/category.model.js';



export const createPost = async (req, res) => {
  const { title, content, category } = req.body;
  
  if (!title || !content || !category) {
    return res.status(400).json({ message: 'Title, content, and category are required' });
  }
  const post = new PostModel({ ...req.body, author: req.user.id });
  await post.save();
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await PostModel.find().populate('author', 'username');
  res.json(posts);
};

export const updatePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post || post.author.toString() !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });

  Object.assign(post, req.body);
  await post.save();
  res.json(post);
};

export const deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post || post.author.toString() !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });

  await post.deleteOne();
  res.json({ message: 'Post deleted' });
};
