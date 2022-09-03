var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      { name: "Jack", gender: "Male", city: "LONDON" },
      { name: "Jack", gender: "Male", city: "LONDON" },
      { name: "Jack", gender: "Male", city: "LONDON" },
      { name: "Jack", gender: "Male", city: "LONDON" },
    ];

    $scope.employees = employees;
  });
