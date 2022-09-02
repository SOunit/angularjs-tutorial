var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employee = {
      firstName: "Jack",
      lastName: "Pearson",
      gender: "Male",
    };

    $scope.employee = employee;
  });
