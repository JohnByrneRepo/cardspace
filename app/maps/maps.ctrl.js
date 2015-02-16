angular.module('cs.maps', [])
  .controller('MapsCtrl', function (ActionDispatcherService, $scope, $location) {

    $scope.loggedInUser = ActionDispatcherService.getUser();

    // $scope.$on('actionDispatched', function() {
    //   $scope.loggedInUser = ActionDispatcherService.getUser;
    // });

    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map-view').setView([51.505, -0.09], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    
    // L.marker([51.5, -0.09]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    //   .openPopup();
});
