// api.users.js

var mongoose = require ("mongoose");

function createUser(aUserId, aEmailAddress, aPassword, aResponse) {
  log ('There are ' + countUsers() + ' users.');
  if (countUsers() < 100) {
    var user = {
      userId: aUserId,
      profileName: '@Developer',
      firstName: 'John',
      lastName: 'Smith',
      emailAddress: aEmailAddress,
      password: aPassword,
      favouritesTotal: 0,
      recommendationsTotal: 0,
      connectionsTotal: 0,
      location: '',
      jobs: [
        ''
      ]
    };
    var usr = new Users(user).save();
    aResponse.send(user);
  }
  else {
    aResponse('Maximum user base exceeded');
  }
}

function findUser(aKey, aValue, aResponse) {
  var user = Users.findOne({emailAddress: aValue}, function(error, Users) {
    if (error) {
      aResponse.send('Not found');
    }
    else {
      aResponse.send(Users);
    }
  });
}

function findUserByEmailAndPassword(
  aEmail, aPassword, Users) {

    console.log('----');
    console.log('Searching users: ' + JSON.stringify(Users));

    var User = Users.find(
      {emailAddress: aEmail, password: aPassword},
      function(error, User) {
        if (error) {
          return 'Not found';
        }
        else {
          return User;
        }
      }
    );
}

function getUsers(db) {


}

function countUsers() {
  var total = 0;
  Users.find(function (error, Users) {
    log ('All Users: ') + dir (Users);
    log ('Total: ' + Users.length);
    _.each(Users, function (user) {
      total++;
    });
  });
  return total;
}

exports.findUserByEmailAndPassword = findUserByEmailAndPassword;
