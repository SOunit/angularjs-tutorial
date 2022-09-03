var myApp = angular
  .module("myModule", [])
  .controller("redColorController", function ($scope, $rootScope) {
    $scope.redColor = "I am Red color";
    $rootScope.rootScopeColor = "I am Root Scope Color";
  })
  .controller("greenColorController", function ($scope) {
    $scope.greenColor = "I am Green color";
  });
