import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, { timestamps: true });

const PostModel = mongoose.model('Post', postSchema);

export default PostModel
