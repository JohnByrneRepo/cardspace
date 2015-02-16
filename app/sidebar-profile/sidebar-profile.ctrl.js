angular.module('cs.sidebarProfile', [])
  .controller('SidebarProfileCtrl',
    function (ActionDispatcherService, GroupService,
      $scope, $location) {

    GroupService.getGroups(setGroups);

    function setGroups() {
      $scope.groups = ActionDispatcherService.getGroups();
    }

    $('.sidebar').css({'display':'block'});

    $(document).on('scroll', function() {
      if ($(window).scrollTop() > 184) {
        $('.sidebar-profile-tpl-container').css({
          'position': 'fixed',
          'left': '15px',
          'top': '25px',
          'width': '350px'
        });
      } else {
        $('.sidebar-profile-tpl-container').css({
          'position': 'relative',
          'left': '0px',
          'top': '-108px',
          'width': '350px'
        });
      }
      /*
      if ($(window).scrollTop() < 251) {
        $('.profile-header').add('.sidebar-header').css({
          'position': 'relative',
          'top': '0px'
        });
      } else {
        var left = $('.sidebar-tpl-container').offset().left;
        $('.profile-header').add('.sidebar-header').css({
          'position': 'fixed',
          'top': '0px'
        });
      }
      */

      // console.log('Event Fired');
    });

    //$scope.groups = $rootscope.groups;

    $scope.loggedInUser = ActionDispatcherService.getUser();


    //$scope.loggedInUser = $rootscope.user;

    // $scope.$on('actionDispatched', function() {
    //   $scope.loggedInUser = ActionDispatcherService.getUser;
    // });
});
