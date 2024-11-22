import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'shreysadhukhan';

// Function to verify the JWT token and return the decoded user data
export const verifyToken = (token) => {
  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // Returns user info (userId, email, isAdmin, etc.)
  } catch (error) {
    console.error('JWT Token verification failed:', error);
    return null; // Return null if token verification fails
  }
};

// Function to generate a JWT token for a user
export const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email, isAdmin: user.isAdmin },
    JWT_SECRET,
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};
