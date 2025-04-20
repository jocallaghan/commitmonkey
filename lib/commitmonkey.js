#!/usr/bin/env node

const {initHook} = require("./commitmonkey-installer");
const {getRoast} = require("./commitmonkey-roaster");

(async () => {
    const args = process.argv.slice(2);

    if (args[0] === 'init-hook') {
        initHook();
    } else if (args[0] === 'roast') {
        const roast = await getRoast(args[1]);
        console.log(roast);
    } else {
        console.log('Usage: commitmonkey <init-hook|roast>');
    }
})();
