var mongoose = require ("mongoose");

var PostSchema = new mongoose.Schema({
  "postId": Number,
  "userId": Number,
  "profileName": String,
  "text": String
});

exports.Schema = PostSchema;
