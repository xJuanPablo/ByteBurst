const Comment = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');
const Thread = require('./Thread');
const Users = require('./User');

Users.hasMany(Post)