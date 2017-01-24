// INITIALIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $stateParams) {

console.log($stateParams)

$scope.destinations = mainSrv.travelInfo;

for (var i = 0; i < $scope.destinations.length; i++) {
  var pageId = parseInt($stateParams.id)
    if ($scope.destinations[i].id === pageId) {
      $scope.bookedDest = $scope.destinations[i];
  }
}

$scope.background = {
  "background": "url(" + $scope.bookedDest.image + ") no-repeat center"
}

});
