const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const index = require('./routes/index');
const help = require('./routes/help');
const file = require('./routes/file');

const face = require('./module/face/routes/index');

// 生成错误日志文件，取消页面输出
const debug = (data) => fs.writeFile('error.json', JSON.stringify(data), (err) => console.log("日志已生成..."));


const app = express();

app.set('views', path.join(__dirname, 'component'));

app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'component')));
app.use(express.static(path.join(__dirname, 'module')));

app.use('/', index);
app.use('/', help);
app.use('/api/v1.1/', file);
app.use('/module/', face);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    debug({
        "message": err.message,
        "status": err.status,
        "stack": err.stack
    });
    res.render('404');

});


module.exports = app;
