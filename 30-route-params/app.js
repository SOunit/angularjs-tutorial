var myApp = angular
  .module("myModule", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateUrl: "templates/courses.html",
        controller: "coursesController",
      })
      .when("/students", {
        templateUrl: "templates/students.html",
        controller: "studentsController",
      })
      .when("/students/:id", {
        templateUrl: "templates/studentDetails.html",
        controller: "studentDetailsController",
      })
      .otherwise({ redirectTo: "/home" });

    // $locationProvider.html5Mode(true);
  })
  .controller("homeController", function ($scope) {
    $scope.message = "Home Page";
  })
  .controller("coursesController", function ($scope) {
    $scope.courses = ["test course1", "test course2", "test course3"];
  })
  .controller("studentsController", function ($scope, $http) {
    $http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        $scope.students = response.data;
      });
  })
  .controller(
    "studentDetailsController",
    function ($scope, $http, $routeParams) {
      $http
        .get(`https://jsonplaceholder.typicode.com/users/${$routeParams.id}`)
        .then(function (response) {
          $scope.student = response.data;
        });
    }
  );
