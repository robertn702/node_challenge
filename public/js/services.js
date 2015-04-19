angular.module('app.services', [])

.factory('List', function(uuid4) {
  var list = {};

  list.get = function(uuid) {
    return JSON.parse(localStorage.getItem(uuid));
  };

  list.post = function(data, uuid) {
    localStorage.setItem(uuid, JSON.stringify(data));
  };
  return list;
})
