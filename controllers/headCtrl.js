(function() {
  'use strict';

  angular.module('vikas')
    .controller('headCtrl', function($scope) {
      $scope.isOpen = false;

      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    });
})();