import UserModel from '../models/user.model.js';

export const roleCheck = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: No user authenticated' });
    }

    const user = await UserModel.findById(req.user.id).select('role');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }

    next();
  } catch (error) {
    console.error('Error in roleCheck middleware:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};