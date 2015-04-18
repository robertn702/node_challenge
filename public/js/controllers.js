angular.module('app.controllers', [])

.controller('newListController', function($scope, List) {
  $scope.list = List.get() || [];
  console.log('list: ', $scope.list);
  $scope.addItem = function(newItem) {
    $scope.newItem = "";
    $scope.list.push({
      date: new Date(),
      text: newItem
    })
  };
  $scope.save = function() {
    List.post($scope.list)
  };
})
.controller('listController', function($scope, List) {
  $scope.list = List.get();
})
