var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope, $http, $log) {
    var successCallback = function (response) {
      $scope.users = response.data;
      $log.info(response);
    };

    var errorCallback = function (reason) {
      $scope.error = reason.data;
      $log.info(reason);
    };

    $http({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then(successCallback, errorCallback);
  });
