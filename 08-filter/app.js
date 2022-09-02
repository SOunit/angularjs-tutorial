var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      {
        name: "Jack1",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1990"),
      },
      {
        name: "Jack2",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1990"),
      },
      {
        name: "Jack3",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1990"),
      },
      {
        name: "Jack4",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1990"),
      },
      {
        name: "Jack",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1990"),
      },
    ];

    $scope.employees = employees;

    $scope.rowLimit = 3;
  });
