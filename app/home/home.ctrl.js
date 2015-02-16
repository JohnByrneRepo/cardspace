'use strict';

/**
 * @ngdoc function
 * @name csApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of Cardspace
 */

angular.module('cs.home', [])
  .controller('HomeCtrl',
    function (ActionDispatcherService, UserService,
      $rootScope, $scope) {

    $scope.homeFormValid = 'false';

    $scope.users = UserService.getUsers();

    $scope.$watch('inputEmail', function() {
      $rootScope.inputEmail = $scope.inputEmail;
    });

    $scope.$watch('inputPassword', function() {
      $rootScope.inputPassword = $scope.inputPassword;
    });

    //$scope.users = JSON.parse(localStorage.getItem('users'));

    $scope.checkValid = function () {
      var userRow = {};
      $scope.homeFormValid = 'false';

      $scope.user = UserService.loginUser(
        $rootScope.inputEmail,
        $rootScope.inputPassword
      );

      // if ($rootScope.user.emailAddress === $scope.inputEmail
      //     && $rootScope.user.password === $scope.inputPassword) {
      //       $scope.homeFormValid = 'true';
      // }

      // for (var i = 0; i < $rootScope.users.length; i++) {
      //   userRow = $rootScope.users[i];
      //   if (userRow.emailAddress === $scope.inputEmail
      //     && userRow.password === $scope.inputPassword) {
      //       $scope.homeFormValid = 'true';
      //       ActionDispatcherService.setUser(userRow);
      //       $location.path('/profile');
      //     }
      // }
    };

  });
