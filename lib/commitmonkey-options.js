const fs = require('fs');
const path = require('path');
const os = require('os');
const yaml = require('yaml');

const OPTIONS_FILE = path.join(os.homedir(), '.commitmonkey.yaml');

let OPTIONS = {};
if (!fs.existsSync(OPTIONS_FILE)) {
    console.error('❌ CommitMonkey must have options file in ~/.commitmonkey.yaml. See README for details.');
    process.exit(1);
} else {
    OPTIONS = yaml.parse(fs.readFileSync(OPTIONS_FILE, 'utf8'));
}

module.exports = {
    OPTIONS: OPTIONS
};
