angular.module('app.controllers', [])

.controller('newListController', function($scope, $state, uuid4, List) {
  $scope.list = {};
  $scope.list.items = [];
  $scope.list.name = "";

  $scope.addItem = function(newItem, keyEvent) {
    if(!keyEvent || keyEvent.which === 13) {
      $scope.newItem = "";
      $scope.list.items.push({
        date: new Date(),
        text: newItem,
        complete: false
      })
    }
  };

  $scope.save = function() {
    var uuid = uuid4.generate();

    $scope.list.name = $scope.listName;
    List.post($scope.list, uuid);
    $state.go('list', {uuid: uuid});
  };
})

.controller('listController', function($scope, $state, uuid4, $stateParams, List) {
  var uuid = $stateParams.uuid;
  $scope.list = List.get(uuid);

  if (!$scope.list) {
    $state.go('404');
  } else if (!$scope.list.name) {
    $scope.list.name = "";
  }

  $scope.addItem = function(newItem, keyEvent) {
    if(!keyEvent || keyEvent.which === 13) {
      $scope.newItem = "";
      $scope.list.items.push({
        date: new Date(),
        text: newItem,
        complete: false
      })
    }
  };

  $scope.save = function() {
    if ($scope.listName) {
      $scope.list.name = $scope.listName;
    }
    List.post($scope.list, uuid);
  };
})
