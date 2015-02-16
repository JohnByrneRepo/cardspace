var mongoose = require ("mongoose");

var GroupSchema = new mongoose.Schema({
  "groupId": String,
  "groupName": String,
  "ownerFirstName": String,
  "ownerLastName": String,
  "emailAddress": String,
  "groupDescription": String,
  "members": Number,
  "posts": Number,
  "recommendationsTotal": Number,
  "connectionsTotal": Number,
  "location": String
});

exports.Schema = GroupSchema;
