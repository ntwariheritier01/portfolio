import jwt from 'jsonwebtoken'

export const generateToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);