angular.module('app.controllers', [])

.controller('newListController', function($scope, List) {
  $scope.list = List.get() || [];
  console.log('list: ', $scope.list);

  $scope.addItem = function(newItem) {
    $scope.newItem = "";
    $scope.list.push({
      id: $scope.list.length,
      date: new Date(),
      text: newItem,
      complete: false
    })
  };

  $scope.save = function() {
    console.log('selected: ', $scope.list);
    // console.log(angular.element(document.querySelectorAll('.list-item')).prop('checked'));
    List.post($scope.list)
  };
})


.controller('listController', function($scope, List) {
  $scope.list = List.get();
})
