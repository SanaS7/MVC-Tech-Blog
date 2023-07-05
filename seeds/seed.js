// const sequelize = require('../config/connection');
// const { User, Blog, Comment } = require('../models');

// const blogData = require('./blogData.json');
// const commentData = require('./commentData.json');
// const userData = require('./userData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const blog of blogData) {
//     await Blog.create({
//       ...blog,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   const comments = await Comment.bulkCreate(commentData, {
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();



const mongoose = require('mongoose');
const { User, Blog, Comment } = require('../models');
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/techblog_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    await User.deleteMany({});
    await Blog.deleteMany({});
    await Comment.deleteMany({});

    const users = await User.create(userData);

    const blogs = [];
    for (const blog of blogData) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      blogs.push({
        ...blog,
        user_id: randomUser._id,
      });
    }
    await Blog.create(blogs);

    const comments = [];
    for (const comment of commentData) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
      comments.push({
        ...comment,
        user_id: randomUser._id,
        blog_id: randomBlog._id,
      });
    }
    await Comment.create(comments);

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
