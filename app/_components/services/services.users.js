'use strict';

/**
 * @ngdoc function
 * @name app/_components/services/services.users.js
 * @description
 * # Users service
 */
angular.module('csApp')
  .factory('UserService',
    function(ActionDispatcherService, $rootScope,
      $http, $location) {

    var loginUser = function(email, password) {
      $http.get('/user/', {
        params: {
          emailAddress: email,
          password: password
        }
      }).then(function(result) {
        $rootScope.user = result.data;
        ActionDispatcherService.setUser(result.data);
        if (result.data.length > 0) {
          $location.path('/profile');
          $('.sidebar').css({'display':'block'});
          $('.main').css({'background':'transparent'});
          $('.main').removeClass('col-md-12').addClass('col-md-9');
        }
      });
    }

    var getUsers = function() {
      console.log('getting users');
      $http.get('users/')
        .then(function(result) {
          $rootScope.users = result.data;
      });
    }

    // Add user
    // function addUser(name) {
    //   var request = $http({
    //     method: "post",
    //     url: "user",
    //     //params: {
    //       //action: "add"
    //     //},
    //     //data: {
    //       //name: name
    //     //}
    //   });
    //   return( request.then(handleSuccess, handleError ) );
    // }
    // function handleSuccess(response) {
    //   return(response.data);
    // }

    // Remove user
    // function removeFriend( id ) {
    //   var request = $http({
    //     method: "delete",
    //     url: "api/index.cfm",
    //     params: {
    //       action: "delete"
    //     },
    //     data: {
    //       id: id
    //     }
    //   });
    //   return( request.then( handleSuccess, handleError ) );
    // }

    // Return public API.
    return({
      //addFriend: addFriend,
      loginUser: loginUser,
      getUsers: getUsers,
      //removeFriend: removeFriend
    });
});
