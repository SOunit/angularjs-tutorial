// 1. create a module
// 2. create a controller
// 3. connect module and controller
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var country = {
      name: "U.S.A.",
      capital: "Washington D.C.",
      flag: "./Images/sand.jpg",
    };

    $scope.country = country;
  });
