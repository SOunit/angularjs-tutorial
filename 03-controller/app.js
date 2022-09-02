// create a module
var myApp = angular.module("myModule", []);

// create controller
var myController = function ($scope) {
  var employee = {
    firstName: "Jack",
    lastName: "Pearson",
    gender: "Male",
  };

  $scope.employee = employee;
};

// register controller with module
myApp.controller("myController", myController);
