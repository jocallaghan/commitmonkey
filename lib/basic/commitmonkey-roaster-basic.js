const {roastProfiles} = require("./commitmonkey-roaster-basic-profiles");
const {OPTIONS} = require("../commitmonkey-options");


function getBasicRoast(originalMessage) {

    const profileKeys = Object.keys(roastProfiles);
    const profileKey = OPTIONS.profile || profileKeys[Math.floor(Math.random() * profileKeys.length)];
    const profile = roastProfiles[profileKey] || roastProfiles.ai;
    const roast = profile[Math.floor(Math.random() * profile.length)];

    if (OPTIONS['mode'] === 'append') {
        return originalMessage + '\n\n[commitmonkey]: ' + roast;
    } else {
        return roast;
    }
}

module.exports = {
    getBasicRoast
};
