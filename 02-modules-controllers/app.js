// create a module
var myApp = angular.module("myModule", []);

// create controller
var myController = function ($scope) {
  // this `message` is model
  $scope.message = "Angular Tutorial";
};

// register controller with module
myApp.controller("myController", myController);
