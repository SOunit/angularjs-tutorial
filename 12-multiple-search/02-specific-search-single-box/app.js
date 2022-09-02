var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      {
        name: "Jack1",
        salary: 10000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1991"),
        city: "Pittsburgh",
      },
      {
        name: "Jack2",
        salary: 20000,
        gender: "Male",
        dateOfBirth: new Date("March 23, 1992"),
        city: "London",
      },
      {
        name: "Bec1",
        salary: 30000,
        gender: "Female",
        dateOfBirth: new Date("November 23, 1993"),
        city: "Pittsburgh",
      },
      {
        name: "Bec2",
        salary: 40000,
        gender: "Female",
        dateOfBirth: new Date("November 23, 1994"),
        city: "London",
      },
      {
        name: "Jack3",
        salary: 50000,
        gender: "Male",
        dateOfBirth: new Date("November 23, 1995"),
        city: "London",
      },
    ];

    $scope.employees = employees;

    $scope.search = function (item) {
      var notTyped = $scope.searchText === undefined;

      if (notTyped) {
        return true;
      } else {
        if (
          item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !==
            -1 ||
          item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) !==
            -1
        ) {
          return true;
        } else {
          return false;
        }
      }
    };
  });
