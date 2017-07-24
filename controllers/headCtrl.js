(function() {
  'use strict';

  angular.module('vikas')

    .controller('headCtrl', headCtrl);
    headCtrl.$inject= ['$scope'];
    function headCtrl($scope) {
      $scope.isOpen = false;

      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    };
})();