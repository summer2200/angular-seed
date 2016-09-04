'use strict';

angular.module("myApp.phoneDetail", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones/:phoneId', {
    templateUrl: 'phone-detail/phone-detail.html',
    controller: 'phoneCtrl'
  })
  .otherwise({redirectTo: '/phones'});

}])

.controller('phoneCtrl', ['$scope','$routeParams','$http', phoneCtrl]);

function phoneCtrl($scope, $routeParams, $http) {
  var phoneId = $routeParams.phoneId;
  console.log(phoneId);

  // $http.get("phones/phones.json").then(function(response) {
  //   $scope.phones = response.data;

  //   var selectedPhone = $.grep($scope.phones, function(phone) {
  //     // console.log(phone);
  //     return phone.id == phoneId;
  //   });
  //   $scope.selected = selectedPhone[0];
  //        console.log($scope.selected);
  // });

  $http.get("phones/" + phoneId + ".json").success(function(data) {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };
}
