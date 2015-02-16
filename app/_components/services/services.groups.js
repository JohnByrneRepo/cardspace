'use strict';

/**
 * @ngdoc function
 * @name app/_components/services/services.users.js
 * @description
 * # Users service
 */
angular.module('csApp')
  .factory('GroupService',
    function(ActionDispatcherService, $rootScope,
      $http, $location) {

    var getGroups = function(callback) {
      $http.get('/groups/')
        .then(function(result) {
          $rootScope.groups = result.data;
          ActionDispatcherService.setGroups(result.data);
          callback();
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
      getGroups: getGroups
      //removeFriend: removeFriend
    });
});
