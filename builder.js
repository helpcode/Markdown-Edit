var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './package.json', // use the glob format
    platforms: ['linux64'],
    version: '0.25.0'
});

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});