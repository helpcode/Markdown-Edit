const PublicHead = require('../util/import');

PublicHead.router.get('/help', function(req, res, next) {
    res.render(PublicHead.config.helpPage.router, PublicHead.config.helpPage);
});

module.exports = PublicHead.router;