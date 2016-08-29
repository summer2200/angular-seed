'use strict';

angular.module("myApp.phoneDetail", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones/:id', {
    templateUrl: 'phone-detail/phone-detail.html',
    controller: 'phoneCtrl'
  });
}])

.controller('phoneCtrl', ['$scope','$routeParams','$http', phoneCtrl]);

function phoneCtrl($scope, $routeParams, $http) {
  var phoneId = $routeParams.id;
  console.log(phoneId);

  $http.get("phones/phones.json").then(function(response) {
    $scope.phones = response.data;

    var selectedPhone = $.grep($scope.phones, function(phone) {
      // console.log(phone);
      return phone.age == phoneId;
    });
    $scope.selected = selectedPhone[0];
         console.log($scope.selected);
  });
}
