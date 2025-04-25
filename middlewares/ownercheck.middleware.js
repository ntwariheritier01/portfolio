export const ownerCheck = async (req, res, next) => {
    try {
      if (!req.user || !req.user.id || !req.user.role) {
        return res.status(401).json({ message: 'Unauthorized: No user authenticated' });
      }
  
      const { id } = req.params;
      const post = await PostModel.findById(id).select('author');
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      const isAuthor = post.author.toString() === req.user.id;
      const isAdmin = req.user.role === 'admin';
  
      if (!isAuthor && !isAdmin) {
        return res.status(403).json({ message: 'Forbidden: You are not authorized to delete this post' });
      }
  
      next();
    } catch (error) {
      console.error('Error in ownerCheck middleware:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };