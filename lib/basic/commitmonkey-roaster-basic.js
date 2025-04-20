const {roastProfiles} = require("./commitmonkey-roaster-basic-profiles");
const {OPTIONS} = require("../commitmonkey-options");


function getBasicRoast(originalMessage) {

    const profileKeys = Object.keys(roastProfiles);
    const profileKey = OPTIONS.profile || profileKeys[Math.floor(Math.random() * profileKeys.length)];
    const profile = roastProfiles[profileKey] || roastProfiles.ai;
    return profile[Math.floor(Math.random() * profile.length)];
}

module.exports = {
    getBasicRoast
};
