const PublicHead = require('./../../util/public');

PublicHead.router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

PublicHead.router.post('/file', function(req, res, next) {
    PublicHead.file.MkDir();
    console.log(req.body);
    if(PublicHead.file.SaveFile({
            DATA: PublicHead.file.DecryptBinary(req.body.value)
        })){
        return res.json({
            status: 200,
            result: 'FileSaveSuccess'
        });
    }else {
        return res.json({
            status: 200,
            result: 'FileAlreadyExists'
        });
    }
});

module.exports = PublicHead.router;