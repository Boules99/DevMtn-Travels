// INITIALIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv) {

  $scope.destinations = mainSrv.travelInfo;

});
