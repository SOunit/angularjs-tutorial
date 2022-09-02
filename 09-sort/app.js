var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      {
        name: "Jack1",
        salary: 10000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1991"),
      },
      {
        name: "Jack2",
        salary: 20000,
        gender: "Male",
        dateOfBirth: new Date("March 23, 1992"),
      },
      {
        name: "Jack3",
        salary: 30000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1993"),
      },
      {
        name: "Jack4",
        salary: 40000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1994"),
      },
      {
        name: "Jack",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1995"),
      },
    ];

    $scope.employees = employees;

    $scope.sortColumn = "name";
  });
