const {getBasicRoast} = require("./basic/commitmonkey-roaster-basic");

function getRoast(originalMessage) {
    return getBasicRoast(originalMessage);
}

module.exports = {
    getRoast
};

