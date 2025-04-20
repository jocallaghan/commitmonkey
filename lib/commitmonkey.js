
const {initHook} = require("./commitmonkey-installer");
const {getRoast} = require("./commitmonkey-roaster");

// CLI Entry
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args[0] === 'init') {
        initHook();
    } else if (args[0] === 'roast') {
        console.log(getRoast());
    } else {
        console.log('Usage: commitmonkey <init|roast>');
    }
}
