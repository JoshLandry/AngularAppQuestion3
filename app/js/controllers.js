'use strict';

/* Controllers */

var myApp = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.controller('UserCreate', function($scope) {
  $scope.name = "User Creator";
});

myApp.controller('UserListCtrl', function($scope) {

  $scope.name = "Users";
  $scope.orderProp = "lastname";

  $scope.users = [
    {'firstname': 'Hilary',
     'lastname': 'Varghese',
     'email': 'who knows'},
    {'firstname': 'Alicia',
     'lastname': 'Hendrix',
 	 'email': 'who knows'},
    {'firstname': 'Molaroid',
     'lastname': 'Xoom',
     'email': 'bigboi@yahoo.net'},
     {'firstname': 'Joshua',
 	  'lastname': 'Landry',
 	  'email': 'bluemazaro@yahoo.com'}
  ];
});