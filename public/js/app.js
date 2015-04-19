var app = angular.module('app', [
  'app.controllers',
  'app.services',
  'ui.router',
  'ui.bootstrap',
  'uuid4'
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
      url: '/list/:uuid',
      templateUrl: 'views/list.html',
      controller: 'listController'
    })
})
