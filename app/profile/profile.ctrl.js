angular.module('cs.profile', [])
  .controller('ProfileCtrl',
    function (ActionDispatcherService, PostService,
      $scope, $location) {

    PostService.getPosts(setPosts);

    function setPosts() {
      $scope.posts = ActionDispatcherService.getGroups();
    }

    $scope.loggedInUser = ActionDispatcherService.getUser();

    $('.main').removeClass('col-md-12').addClass('col-md-9');
    $('.sidebar').css({'display':'block'});

    // $scope.$on('actionDispatched', function() {
    //   $scope.loggedInUser = ActionDispatcherService.getUser;
    // });
});
