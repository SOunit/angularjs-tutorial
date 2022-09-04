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
    function (studentList, $scope, $route, $scope, $log) {
      $scope.$on("$locationChangeStart", function (event, next, current) {
        $log.info("$locationChangeStart fired.");
        $log.info("event", event);
        $log.info("next", next);
        $log.info("current", current);
      });
      $scope.$on("$routeChangeStart", function (event, next, current) {
        $log.info("$routeChangeStart fired.");
        $log.info("event", event);
        $log.info("next", next);
        $log.info("current", current);
      });

      // $rootScope.$on("$locationChangeSuccess", function () {
      //   $log.info("$locationChangeSuccess fired.");
      // });
      // $rootScope.$on("$routeChangeSuccess", function () {
      //   $log.info("$routeChangeSuccess fired.");
      // });

      $scope.reloadData = function () {
        $route.reload();
      };

      $scope.students = studentList;

      // $http
      //   .get("https://jsonplaceholder.typicode.com/users")
      //   .then(function (response) {
      //     console.log(response.data);
      //     $scope.students = response.data;
      //   });
    }
  );
