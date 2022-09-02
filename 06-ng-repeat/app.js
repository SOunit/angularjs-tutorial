var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      { firstName: "Jack", lastName: "Pearson", gender: "Male", salary: 50000 },
      { firstName: "Jack", lastName: "Pearson", gender: "Male", salary: 50000 },
      { firstName: "Jack", lastName: "Pearson", gender: "Male", salary: 50000 },
      { firstName: "Jack", lastName: "Pearson", gender: "Male", salary: 50000 },
    ];

    $scope.employees = employees;
  });
