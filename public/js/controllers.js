angular.module('app.controllers', [])

.controller('newListController', function($scope, $state, uuid4, List) {
  $scope.list = {};
  $scope.list.items = [];
  $scope.list.name = "";

  // adds and displays item *DOES NOT SAVE ITEM
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

  // save a new list to local storage
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

  // sends 404 error if the list does not exist
  if (!$scope.list) {
    $state.go('404');
  } else if (!$scope.list.name) {
    // sets list name to blank string if the list does not have a name
    $scope.list.name = "";
  }

  // adds and displays item *DOES NOT SAVE ITEM
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

  // updates the list
  $scope.save = function() {
    // if a name was created, sets name
    if ($scope.listName) {
      $scope.list.name = $scope.listName;
    }
    List.post($scope.list, uuid);
  };
})
