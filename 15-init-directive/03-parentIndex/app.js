var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var countries = [
      { name: "UK", cities: ["a", "b", "c"] },
      { name: "US", cities: ["a", "b", "c"] },
      { name: "JP", cities: ["a", "b", "c"] },
    ];

    $scope.countries = countries;
  });
