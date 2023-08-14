const Comment = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');
const Users = require('./User');

//Code for user-post relationship
// A user can have multiple post
Users.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(Users, {
  foreignKey: 'user_id',
});




// Code for user-comment relationship
Users.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Users, {
  foreignKey: 'user_id',
});



// Code for user-like relationship
Users.hasMany(Like, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Like.belongsTo(Users, {
  foreignKey: 'user_id',
});



// Code for post-comment relationship
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});



// Code for post-like relationship
Post.hasMany(Like, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
});




// Code for comment-like relationship
Comment.hasMany(Like, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Like.belongsTo(Comment, {
  foreignKey: 'comment_id',
});


module.exports = {Comment, Like, Post, Users}