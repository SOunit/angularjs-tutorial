var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
      // url#top
      $location.hash(scrollLocation);
      $anchorScroll.yOffset = 20;
      $anchorScroll();
    };
  });
