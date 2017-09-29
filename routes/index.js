const PublicHead = require('../util/import');


PublicHead.router.get('/index', function(req, res, next) {
  res.render(PublicHead.config.IndexPage.router, PublicHead.config.IndexPage);
});

PublicHead.router.get('/welcome', function(req, res, next) {
    res.render(PublicHead.config.welcomePage.router, PublicHead.config.welcomePage);
});

PublicHead.router.get('/introduce' , function (req , res ,next) {
    res.sendFile('introduce.html',
        {
            root: PublicHead.path.join(__dirname, '../introduce')
        })
});


module.exports = PublicHead.router;
