const {getBasicRoast} = require("./basic/commitmonkey-roaster-basic");
const {OPTIONS} = require("./commitmonkey-options");
const {getOpenAiRoast} = require("./openai/commitmonkey-roaster-openai");

async function getRoast(originalMessage) {
    let roast;
    if (OPTIONS.strategy === 'openai') {
        roast = await getOpenAiRoast(originalMessage);
    } else {
        roast = getBasicRoast(originalMessage);
    }

    if (OPTIONS['mode'] === 'append') {
        return originalMessage + '\n\n[commitmonkey]: ' + roast;
    } else {
        return roast;
    }
}

module.exports = {
    getRoast
};

