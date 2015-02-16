'use strict';

/**
 * @ngdoc function
 * @name cardspace.controller:CampaignDesignCtrl
 * @description
 * # DesignCtrl
 */

angular.module('ctrl.deisgn', [])
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

    $scope.onDrop = function (data, event) {
      var customObjectData = data['json/offer-item'];
      console.log('dropped custom object');
      console.log('data: ' + JSON.stringify(data));
    };

    $scope.onDragOver = function (event) {
      console.log('dragged over');
    };
  });
