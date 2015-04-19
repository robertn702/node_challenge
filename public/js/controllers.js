angular.module('app.controllers', [])

.controller('newListController', function($scope, $state, uuid4, List) {
  $scope.list = {};
  $scope.list.items = [];
  $scope.list.name = "";

  $scope.addItem = function(newItem) {
    $scope.newItem = "";
    $scope.list.items.push({
      date: new Date(),
      text: newItem,
      complete: false
    })
  };

  $scope.save = function() {
    var uuid = uuid4.generate();

    $scope.list.name = $scope.listName;
    console.log('name: ', $scope.list.name);
    List.post($scope.list, uuid);
    $state.go('list', {uuid: uuid});
  };
})

.controller('listController', function($scope, $state, uuid4, $stateParams, List) {
  var uuid = $stateParams.uuid;
  $scope.list = List.get(uuid);

  if (!$scope.list) {
    $state.go('404');
  }

  $scope.addItem = function(newItem) {
    $scope.newItem = "";
    $scope.list.items.push({
      date: new Date(),
      text: newItem,
      complete: false
    })
  };

  $scope.save = function() {
    List.post($scope.list, uuid);
  };
})
