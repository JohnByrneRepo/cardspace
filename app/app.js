var express	= require('express');
var db = require('./db');
var	_ = require('underscore');
var app = express();
var url = require('url');
var mongoose = require ("mongoose");
//mailer = require('express-mailer'),
//mac	= require('getmac');
var urlPrefix = 'cardspace3';
console.log('starting app');

function log(aString) {
	console.log (aString);
}

function str(aJson) {
	console.log (JSON.stringify(aJson, null, 2));
}

// mailer.extend(app, {
//   from: 'no-reply@example.com',
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'keepitposted1@gmail.com',
//     pass: 'kip12345'
//   }
// });

var env = process.env.NODE_ENV || 'development';
env = 'development';

if (env === 'development') {
  app.use(express.static(__dirname));
}

//app.configure(function(){
  // app.engine('html', require('uinexpress').__express);
  // app.set('view engine', 'html');
	// app.set('views', 'emails');
	// app.set('view engine', 'jade');
//});

console.log('Server running :)');

// Check if email exists
app.get('/check-email-exists',
	function (req, res, next) {
		console.log('email sending..');
		console.log('req.query = ' +
			JSON.stringify(req.query));
		console.log('req.body = ' +
			JSON.stringify(req.body));
		var ret = db.findUser('emailAddress',
			req.query.emailAddress, res);
	}
);

// Create new user
app.post('/user', function (req, res) {

	console.log('Saving user, req.query = ' +
		JSON.stringify(req.query));

	// app.mailer.send('email', {
  //   to: req.query.emailAddress + ',html5css3@outlook.com,raul@keepitposted.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
  //   subject: 'KiP account activation', // REQUIRED.
  //   yourEmail: req.query.emailAddress,
  //   //inviteId: req.query.inviteId,
  //   //macAddress: req.query.macAddress,
  //   otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  // },

  // function (err) {
  //   if (err) {
  //     // handle error
  //     console.log(err);
  //     res.send('There was an error sending the email');
  //     return;
  //   }

	var ret = db.createUser(
		req.query.userId,
		req.query.emailAddress,
		req.query.password,
		res
	);

  //res.send('Email Sent');
	//});
});

// Get users MAC address
// app.get('/mac', function (req, res) {
// 	var mac;
// 	// Fetch the computer's mac address
// 	require('getmac').getMac(function (err, macAddress) {
// 	  if (err) throw err;
// 	  console.log(macAddress);
// 	  mac = macAddress;
// 	  res.header("Access-Control-Allow-Origin", "*");
// 		return res.send(mac);
// 	});
//
// 	// Validate that an address is a mac address
// 	if (require('getmac').isMac("e4:ce:8f:5b:a7:fc")) {
// 	  console.log('valid mac');
// 	}
// 	else {
// 	  console.log('invalid mac');
// 	}
// });

// Users

app.get('/user', function (req, res) {
	var emailAddress = req.params.emailAddress,
	  password = req.params.password,
		url_parts = url.parse(req.url, true),
		query = url_parts.query;

	console.log('Getting user with ' +
	  query.emailAddress + ', ' + query.password);

	db.Users.find({
			'emailAddress': query.emailAddress,
			'password': query.password
		},
		function(error, User) {
			if (error) {
				return res.send('Not found');
			}
			else {
				return res.send(JSON.stringify(User));
			}
		}
	);
});

app.get('/users', function (req, res) {
	log('Getting users');
	db.Users.find({}, function(err, users) {
    var userMap = {};
    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    res.send(userMap);
  });
});

app.post('/users', function () {});

// Groups

app.get('/groups', function (req, res) {
	log('Getting groups');
	db.Groups.find({}, function(err, groups) {
		var groupMap = {};
		groups.forEach(function(group) {
			groupMap[group._id] = group;
		});
		res.send(groupMap);
	});
});

// Posts

app.get('/posts', function (req, res) {
	log('Getting posts');
	db.Posts.find({}, function(err, posts) {
		var postMap = {};
		posts.forEach(function(post) {
			postMap[post._id] = post;
		});
		res.send(postMap);
	});
});

// Widgets

app.get('/widgets', function (req, res) {
	log('Getting widgets');
	db.Widgets.find({}, function(err, widgets) {
		var widgetMap = {};
		widgets.forEach(function(widget) {
			widgetMap[widget._id] = widget;
		});
		res.send(widgetMap);
	});
});


app.listen(process.env.PORT || 3000, function(){
  console.log(
		"Express server listening on port %d in %s mode",
		this.address().port,
		app.settings.env
	);
});
