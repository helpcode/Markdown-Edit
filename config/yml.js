const yaml = require('js-yaml');
const fs = require('fs');

module.exports.ReturnYml =  () =>  yaml.safeLoad(fs.readFileSync('./_config.yml', 'utf8'));

