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
      .when("/studentsSearch/:name?", {
        templateUrl: "templates/studentsSearch.html",
        controller: "studentsSearchController",
      })
      .when("/students/:id", {
        templateUrl: "templates/studentDetails.html",
        controller: "studentDetailsController",
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
  .controller(
    "studentsController",
    function ($scope, $http, $route, $location) {
      $scope.searchStudent = function () {
        if ($scope.name) {
          $location.url(`/studentsSearch/${$scope.name}`);
        } else {
          $location.url(`/studentsSearch`);
        }
      };

      $scope.reloadData = function () {
        $route.reload();
      };

      $http
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          console.log(response.data);
          $scope.students = response.data;
        });
    }
  )
  .controller(
    "studentDetailsController",
    function ($scope, $http, $routeParams) {
      $http
        .get(`https://jsonplaceholder.typicode.com/users/${$routeParams.id}`)
        .then(function (response) {
          $scope.student = response.data;
        });
    }
  )
  .controller(
    "studentsSearchController",
    function ($scope, $http, $routeParams) {
      var url = `https://jsonplaceholder.typicode.com/users`;

      if ($routeParams.name) {
        url = `https://jsonplaceholder.typicode.com/users`;
      }

      $http.get(url).then(function (response) {
        $scope.students = response.data;
      });
    }
  );
