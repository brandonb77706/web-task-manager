import jwt from "jsonwebtoken";
import { promisify } from "util";

// Convert jwt.verify to use promises instead of callbacks
const verifyToken = promisify(jwt.verify);

export const authMiddleware = async (req, res, next) => {
  // Get token from request headers
  const token = req.headers["authorization"];

  // Return error if no token is provided
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token and extract user data
    const decoded = await verifyToken(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
