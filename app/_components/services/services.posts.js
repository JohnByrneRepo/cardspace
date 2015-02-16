'use strict';

/**
 * @ngdoc function
 * @name app/_components/services/services.users.js
 * @description
 * # Users service
 */
angular.module('csApp')
  .factory('PostService',
    function(ActionDispatcherService, $rootScope,
      $http, $location) {

    var getPosts = function() {
      $http.get('/posts/')
        .then(function(result) {
          $rootScope.posts = result.data;
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
      getPosts: getPosts
      //removeFriend: removeFriend
    });
});
