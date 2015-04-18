angular.module('app.services', [])

.factory('List', function($resource) {
  var list = {};
  list.get = function() {
    // console.log(JSON.parse(localStorage.getItem('list')));
    return JSON.parse(localStorage.getItem('list'));
  };
  list.post = function(data) {
    localStorage.setItem('list', JSON.stringify(data));
  };
  return list;
})
