var mongoose = require ("mongoose");

var UserSchema = new mongoose.Schema({
  userId: String,
  profileName: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  password: String,
  biography: String,
  favouritesTotal: Number,
  recommendationsTotal: Number,
  connectionsTotal: Number,
  location: String,
  jobs: Array
});

exports.Schema = UserSchema;
