// INITIALIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("locationsCtrl", function($scope, mainSrv) {

  $scope.destinations = mainSrv.travelInfo;

});
