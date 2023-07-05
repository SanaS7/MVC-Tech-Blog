// const User = require('./User');
// const Blog = require('./Blog');
// const Comment = require('./Comment');

// User.hasMany(Blog, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Blog.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Blog.hasMany(Comment,{
//   foreignKey: 'blog_id'
// })

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
// })

// module.exports = { User, Blog, Comment };


// const User = require('./User');
// const Blog = require('./Blog');
// const Comment = require('./Comment');

// // User has many Blogs
// User.virtual('blogs', {
//   ref: 'Blog',
//   localField: '_id',
//   foreignField: 'user_id',
// });

// // Blog belongs to User
// Blog.virtual('user', {
//   ref: 'User',
//   localField: 'user_id',
//   foreignField: '_id',
//   justOne: true,
// });

// // Blog has many Comments
// Blog.virtual('comments', {
//   ref: 'Comment',
//   localField: '_id',
//   foreignField: 'blog_id',
// });

// // Comment belongs to User
// Comment.virtual('user', {
//   ref: 'User',
//   localField: 'user_id',
//   foreignField: '_id',
//   justOne: true,
// });



// module.exports = { User, Blog, Comment };


const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  // User schema fields
});

const BlogSchema = new Schema({
  // Blog schema fields
});

const CommentSchema = new Schema({
  // Comment schema fields
});

// User has many Blogs
UserSchema.virtual('blogs', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'user_id',
});

// Blog belongs to User
BlogSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

// Blog has many Comments
BlogSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'blog_id',
});

// Comment belongs to User
CommentSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

const User = mongoose.model('User', UserSchema);
const Blog = mongoose.model('Blog', BlogSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { User, Blog, Comment };
