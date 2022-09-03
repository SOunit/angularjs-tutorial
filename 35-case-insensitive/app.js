var myApp = angular
  .module("myModule", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateUrl: "templates/courses.html",
        controller: "coursesController",
        // setup as global already
        // caseInsensitiveMatch: true,
      })
      .when("/students", {
        templateUrl: "templates/students.html",
        controller: "studentsController",
      })
      .otherwise({ redirectTo: "/home" });

    // need server side logic to remove #
    // $locationProvider.html5Mode(true);
  })
  .controller("homeController", function ($scope) {
    $scope.message = "Home Page";
  })
  .controller("coursesController", function ($scope) {
    $scope.courses = ["test course1", "test course2", "test course3"];
  })
  .controller("studentsController", function ($scope, $http, $route) {
    $scope.reloadData = function () {
      $route.reload();
    };

    $http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response.data);
        $scope.students = response.data;
      });
  });
