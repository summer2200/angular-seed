'use strict';

angular.module("myApp.pic", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pic', {
    templateUrl: 'pics/pic.html',
    controller: 'picCtrl'
  });
}])

.controller('picCtrl', ['$scope', picCtrl]);

  function picCtrl($scope) {
  	$scope.phones = [{
    name: "Nokia summer",
    introduction: "Nokia phones are so solid",
    date: "2016-08-09"
  }, {
    name: "Iphone 6s plus",
    introduction: "summer Nokia1 phones are so solid",
    date: "2016-08-21"
  }, {
    name: "Samsung Galaxy7",
    introduction: "Nokia2 phones are so solid",
    date: "2016-03-09"
  }];

  // $scope.strict = true;
  }

  