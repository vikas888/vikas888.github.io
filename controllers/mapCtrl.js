(function() {

  'use strict';

angular.module('vikas')
.controller('mapCtrl', mapCtrl);
mapCtrl.$inject= ['$scope'];
function mapCtrl($scope) {
            angular.extend($scope, {
                indore: {
                	lat: 22.7196,
                	lng: 75.8577,
                    zoom: 11
                },
                markers: {}
            });

            $scope.addMarkers = function() {
                angular.extend($scope, {
                    markers: {
                        m2: {

                            lat: 22.7196,
                			lng: 75.8577,
                            focus: true,
                            message: "My current location",
                            draggable: true
                        }
                    }
                });
            };

            $scope.removeMarkers = function() {
                $scope.markers = {};
            }

            $scope.addMarkers();
}
})();