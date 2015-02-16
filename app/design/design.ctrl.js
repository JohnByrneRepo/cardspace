'use strict';

/**
 * @ngdoc function
 * @name DesignCtrl
 */

angular.module('cs.design', [])
  .controller('DesignCtrl', function ($scope) {
    $scope.campaignDesignConfigOptions = [{
      'configOption': 'Image',
      'configOptionInfo': 'Image info.'
    },{
      'configOption': 'Polygon',
      'configOptionInfo': 'Polygon info.'
    },{
      'configOption': 'Text',
      'configOptionInfo': 'Text info.'
    }];

    $('.main').removeClass('col-md-12').addClass('col-md-9');
    $('.sidebar').css({'display':'block'});

    $scope.onDrop = function (data, event) {
      var customObjectData = data['json/offer-item'];
      console.log('dropped custom object');
      console.log('data: ' + JSON.stringify(data));
    };

    $scope.onDragOver = function (event) {
      console.log('dragged over');
    };
  });
