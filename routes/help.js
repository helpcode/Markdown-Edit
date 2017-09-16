const PublicHead = require('./../util/public');

PublicHead.router.get('/help', function(req, res, next) {
    res.render(PublicHead.yml.helpPage.router, PublicHead.yml.helpPage);
});

module.exports = PublicHead.router;