var app = angular.module('app', [
  'app.controllers',
  'app.services',
  'ngResource',
  'ui.router',
  'ui.bootstrap'
])

.config(function($stateProvider, $urlRouterProvider) {
  // localStorage.clear()

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('create', {
      url: '/',
      templateUrl: 'views/newList.html',
      controller: 'newListController'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      controller: 'listController'
    })
})
