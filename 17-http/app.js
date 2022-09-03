var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope, $http) {
    $http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        $scope.users = response.data;
      });
  });
