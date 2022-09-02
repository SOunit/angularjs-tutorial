var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      {
        name: "Jack1",
        salary: 10000,
        gender: 1,
        dateOfBirth: new Date("November 23, 1991"),
      },
      {
        name: "Jack2",
        salary: 20000,
        gender: 1,
        dateOfBirth: new Date("March 23, 1992"),
      },
      {
        name: "Bec1",
        salary: 30000,
        gender: 2,
        dateOfBirth: new Date("November 23, 1993"),
      },
      {
        name: "Bec2",
        salary: 40000,
        gender: 2,
        dateOfBirth: new Date("November 23, 1994"),
      },
      {
        name: "Jack3",
        salary: 50000,
        gender: 3,
        dateOfBirth: new Date("November 23, 1995"),
      },
    ];

    $scope.employees = employees;
  });
