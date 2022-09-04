var myApp = angular
  .module("myModule", ["ui.router"])
  .config(function ($stateProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "homeController",
      })
      .state("courses", {
        url: "/courses",
        templateUrl: "templates/courses.html",
        controller: "coursesController",
        // setup as global already
        // caseInsensitiveMatch: true,
      })
      .state("students", {
        url: "/students",
        templateUrl: "templates/students.html",
        controller: "studentsController",
        resolve: {
          studentList: function ($http) {
            return $http
              .get("https://jsonplaceholder.typicode.com/users")
              .then(function (response) {
                return response.data;
              });
          },
        },
      })
      .state("studentDetails", {
        url: "/students/:id",
        templateUrl: "templates/studentDetails.html",
        controller: "studentDetailsController",
      });
    // .otherwise({ redirectTo: "/home" });

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
    function (studentList, $scope, $state, $scope, $log) {
      $scope.reloadData = function () {
        $state.reload();
      };

      $scope.students = studentList;
    }
  )
  .controller(
    "studentDetailsController",
    function ($scope, $http, $stateParams) {
      $http
        .get(`https://jsonplaceholder.typicode.com/users/${$stateParams.id}`)
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
