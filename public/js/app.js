var app = angular.module('app', [
  'app.controllers',
  'app.services',
  'ui.router',
  'ui.bootstrap',
  'uuid4'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('new', {
      url: '/',
      templateUrl: 'views/list.html',
      controller: 'newListController'
    })
    .state('list', {
      url: '/list/:uuid',
      templateUrl: 'views/list.html',
      controller: 'listController'
    })
    .state('404', {
      url: '/404',
      template: "404 error"
    })
})
