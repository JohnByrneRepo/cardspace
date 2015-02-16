var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

/*
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);
*/

app.use(express.static(__dirname));

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('/index.html')
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
