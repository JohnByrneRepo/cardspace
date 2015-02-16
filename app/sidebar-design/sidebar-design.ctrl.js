'use strict';

/**
 * @ngdoc function
 * @name app/sidebar-design/sidebar-design.ctrl.js
 * @description Design sidebar controller
 */

 angular.module('cs.sidebarDesign', [])
  .controller('SidebarDesignCtrl',
    function (ActionDispatcherService, WidgetService,
      $scope, $location) {

    WidgetService.getWidgets(setWidgets);

    function setWidgets() {
      $scope.widgets = ActionDispatcherService.getWidgets();
    }

    $('.sidebar').css({'display':'block'});

    $(document).on('scroll', function() {
      if ($(window).scrollTop() > 184) {
        $('.sidebar-design-tpl-container').css({
          'position': 'fixed',
          'left': '15px',
          'top': '25px',
          'width': '350px'
        });
      } else {
        $('.sidebar-design-tpl-container').css({
          'position': 'relative',
          'left': '0px',
          'top': '-108px',
          'width': '350px'
        });
      }
    });

    $scope.loggedInUser = ActionDispatcherService.getUser();
});
