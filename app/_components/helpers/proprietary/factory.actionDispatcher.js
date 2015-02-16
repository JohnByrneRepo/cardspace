'use strict';

/**
 * @ngdoc function
 * @name app/_components/helpers/factory.actionDispatcher.js
 * @description
 * # ActionDispatcher
 */
angular.module('csApp')
  .factory('ActionDispatcherService', function($rootScope) {
    var actionDispatcherService = {};

    actionDispatcherService.data = '';

    // actionDispatcherService.setInputUsername = function(string) {
    //   $rootscope.inputUsername = string;
    // }
    //
    // actionDispatcherService.getInputUsername = function(string) {
    //   return $rootscope.inputUsername = string;
    // }

    actionDispatcherService.setUser = function(object) {
      $rootScope.user = object;
    };

    actionDispatcherService.getUser = function() {
      return $rootScope.user[0];
    };

    // Widgets

    actionDispatcherService.setWidgets = function(object) {
      $rootScope.widgets = object;
    };

    actionDispatcherService.getWidgets = function() {
      return $rootScope.widgets;
    };

    // Groups

    actionDispatcherService.setGroups = function(object) {
      $rootScope.groups = object;
    };

    actionDispatcherService.getGroups = function() {
      return $rootScope.groups;
    };

    // Posts

    actionDispatcherService.setPosts = function(object) {
      $rootScope.posts = object;
    };

    actionDispatcherService.getPosts = function() {
      return $rootScope.posts;
    };


    actionDispatcherService.broadcast = function() {
      $rootScope.$broadcast('actionDispatched');
    };

    return actionDispatcherService;
});
