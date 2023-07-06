const User = require('../models/User'); // Import the User model or the appropriate MongoDB collection model

const withAuth = async (req, res, next) => {
  try {
    // Get the user ID from the session or any other relevant information
    const userId = req.session.userId;

    // Check if the user is logged in by querying the database
    const user = await User.findById(userId); // Replace with the appropriate query based on your MongoDB setup

    if (!user) {
      // User not found, redirect to the login route
      return res.redirect('/login');
    }

    // User is authenticated, allow the request to proceed
    next();
  } catch (error) {
    // Handle any errors that occur during the authentication process
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = withAuth;
