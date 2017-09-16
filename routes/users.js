var PublicHead = require('./../util/public');

/* GET users listing. */
PublicHead.router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = PublicHead.router;
