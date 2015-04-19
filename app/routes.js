module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render(__dirname + '/index.html');
  });
  app.get('/list/:uuid', function(req, res) {
    res.render(__dirname + '/views/list')
  });
  app.post('/list', function(req, res) {

  });
}
