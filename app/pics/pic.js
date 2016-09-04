'use strict';

angular.module("myApp.pic", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pics/pic.html',
    controller: 'picCtrl'
  });
}])


.controller('picCtrl', ['$scope', '$http', picCtrl]);

  function picCtrl($scope, $http) {

  // $scope.strict = true;
  $http.get("phones/phones.json").then(function(response) {
    $scope.phones = response.data;
    // console.log($scope.phones);
  });
  }

