const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {
    ReturnYml() {
        var doc = yaml.safeLoad(fs.readFileSync('./_config.yml', 'utf8'));
        return doc;
    }
};
