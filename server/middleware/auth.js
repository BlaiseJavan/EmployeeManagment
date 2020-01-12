import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
  try {
    const { token } = req.headers;
    const verifyToken = jwt.verify(token, process.env.secret);

    if (verifyToken) {
      req.user = verifyToken;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      status: 403,
      error: 'authantication is not valid',
    });
  }
  return 0;
};

export default auth;
