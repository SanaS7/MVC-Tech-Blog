// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// class Comment extends Model {}

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     comment_description: {
//       type: DataTypes.STRING,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     blog_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'blog',
//         key: 'id',
//       },
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment',
//   }
// );
// module.exports = Comment;

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment_description: {
    type: String,
  },
  date_created: {
    type: Date,
    default: Date.now,
    required: true,
  },
  blog_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
