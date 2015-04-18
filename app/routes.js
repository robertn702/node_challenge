module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render(__dirname + '/index.html');
  });
  app.get('/list', function(req, res) {

  });
  app.post('/list', function(req, res) {

  });
}
