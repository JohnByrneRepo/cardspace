'use strict';

/**
 * @ngdoc function
 * @name app/_components/services/services.widgets.js
 * @description
 * # Widgets service
 */
angular.module('csApp')
  .factory('WidgetService',
    function(ActionDispatcherService, $rootScope,
      $http, $location) {

    var getWidgets = function(callback) {
      $http.get('/widgets/')
        .then(function(result) {
          $rootScope.widgets = result.data;
          ActionDispatcherService.setWidgets(result.data);
          callback();
      });
    }

    return({
      getWidgets: getWidgets,
    });
});
