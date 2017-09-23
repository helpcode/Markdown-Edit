const PublicHead = require('./../util/public');


PublicHead.router.get('/index', function(req, res, next) {
    console.log( PublicHead.yml.indexPage);
  //PublicHead.file.MkDir();
  res.render(PublicHead.yml.indexPage.router, PublicHead.yml.indexPage);
});

PublicHead.router.get('/welcome', function(req, res, next) {
    res.render(PublicHead.yml.welcomePage.router, PublicHead.yml.welcomePage);
});

PublicHead.router.get('/introduce' , function (req , res ,next) {
    res.sendFile('introduce.html',
        {
            root: PublicHead.path.join(__dirname, '../introduce')
        })
});


module.exports = PublicHead.router;
