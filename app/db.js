var	_ = require('underscore');
var http = require ('http');
var mongoose = require ("mongoose");
var fs = require("fs");
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/cardspace3';
var theport = process.env.PORT || 5000;
console.log('connecting..');
function readJsonFileSync(filepath, encoding) {
	if (typeof (encoding) == 'undefined') {
		encoding = 'utf8';
	}
	var file = fs.readFileSync(filepath, encoding);
	return JSON.parse(file);
}

function getJson(file) {
	var filepath = __dirname + '/' + file;
	return readJsonFileSync(filepath);
}

function log(aString) {
	console.log (aString);
}

function str(aJson) {
	console.log (JSON.stringify(aJson, null, 2));
}

function err(aError) {
	console.error(aError);
}

function dir(aNode) {
	console.dir(aNode);
}

// Makes connection asynchronously.
// Mongoose will queue up database
// operations and release them when
// the connection is complete.

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log ('ERROR connecting to: ' +
			uristring + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' +
			uristring);
		}
});

console.log('starting db');

// Datastorage
//
// users, posts, cards, locations, messages, ads, offers

//
// -generate revenue (offers)
// -promote your business (ads)
//

// Features / areas
//
// profile, design (+templates), pro (drag n drop), share, locations, settings

var usersApi = require('./_api/api.users.js');
var postsApi = require('./_api/api.posts.js');
var groupsApi = require('./_api/api.groups.js');
var widgetsApi = require('./_api/api.widgets.js');
// var cards = require('./_api/api.users.js');
// var locations = require('./_api/api.users.js');
// var messages = require('./_api/api.users.js');
// var ads = require('./_api/api.users.js');
// var offers = require('./_api/api.users.js');

var userSchema = require('./_schema/schema.user.js');
var postSchema = require('./_schema/schema.post.js');
var groupSchema = require('./_schema/schema.group.js');
var widgetSchema = require('./_schema/schema.widget.js');
// var cards = require('./_schema/schema.user.js');
// var locations = require('./_schema/schema.user.js');
// var messages = require('./_schema/schema.user.js');
// var ads = require('./_schema/schema.user.js');
// var offers = require('./_schema/schema.user.js');

var userMocks = getJson('./_mocks/mocks.users.js');
var postMocks = getJson('./_mocks/mocks.posts.js');
var groupMocks = getJson('./_mocks/mocks.groups.js');
var widgetMocks = getJson('./_mocks/mocks.widgets.js');
// var groupMocks = getJson('./_mocks/mocks.groups.js');
// var groupMocks = getJson('./_mocks/mocks.groups.js');
// var groupMocks = getJson('./_mocks/mocks.groups.js');
// var groupMocks = getJson('./_mocks/mocks.groups.js');
// var groupMocks = getJson('./_mocks/mocks.groups.js');

mongoose.model('Users', userSchema.Schema);
mongoose.model('Posts', postSchema.Schema);
mongoose.model('Groups', groupSchema.Schema);
mongoose.model('Widgets', widgetSchema.Schema);
// mongoose.model('Groups', userSchema.Schema);
// mongoose.model('Groups', userSchema.Schema);
// mongoose.model('Groups', userSchema.Schema);
// mongoose.model('Groups', userSchema.Schema);

var Users = mongoose.model('Users');
var Posts = mongoose.model('Posts');
var Groups = mongoose.model('Groups');
var Widgets = mongoose.model('Widgets');
// var Groups = mongoose.model('Users');
// var Groups = mongoose.model('Users');
// var Groups = mongoose.model('Users');
// var Groups = mongoose.model('Users');

console.log('widgets: ' + JSON.stringify(widgetMocks));

// mongoose.model('Cards', userSchema.Schema); Users = mongoose.model('Users');
// mongoose.model('Locations', userSchema.Schema); Users = mongoose.model('Users');
// mongoose.model('Messages', userSchema.Schema); Users = mongoose.model('Users');
// mongoose.model('Ads', userSchema.Schema); Users = mongoose.model('Users');
// mongoose.model('Offers', userSchema.Schema); Users = mongoose.model('Users');

// Clear and create mock data

Users.remove({}).exec();
Posts.remove({}).exec();
Groups.remove({}).exec();
Widgets.remove({}).exec();
// Cards.remove({});
// Locations.remove({});
// Messages.remove({});
// Ads.remove({});
// Offers.remove({});

console.log('Creating mocks');

_.each(userMocks, function(user) {
	console.log('saving mocks');
	var userModel =	new Users(user).save(function(success){
		console.log('Saved new user');
	}); 
});
_.each(postMocks, function(post) { var postModel =	new Posts(post).save(function(success){}); });
_.each(groupMocks, function(group) { var groupModel = new Groups(group).save(function(success){}); });
_.each(widgetMocks, function(widget) { var widgetModel = new Widgets(widget).save(function(success){}); });
// _.each(userMocks, function(user) { var model =	new Users(user).save(function(success){}); });
// _.each(userMocks, function(user) { var model =	new Users(user).save(function(success){}); });
// _.each(userMocks, function(user) { var model =	new Users(user).save(function(success){}); });

// Models

exports.Users = Users;
exports.Posts = Posts;
exports.Groups = Groups;
exports.Widgets = Widgets;

// Api

exports.usersApi = usersApi;
