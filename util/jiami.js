const fs = require("fs");
const path = require('path');

console.log(path.join(__dirname, './../../make'));
var paths = path.join(__dirname, './../../make');
fs.mkdir(paths, function (err) {
    if (err)
        throw err;
    console.log('创建目录成功')
});