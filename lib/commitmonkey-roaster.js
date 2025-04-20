const roasts = [
    "Fixed a bug. Or made it worse. Who knows?",
    "Another line of code, another step closer to production chaos.",
    "Moved stuff around. Looks the same. Feels different.",
    "This commit is held together with duct tape and hope.",
    "YOLO-coded this. Please don’t ask for a rollback."
];


function getRoast(originalMessage) {
    return getRandomRoast(originalMessage);
}

function getRandomRoast(originalMessage) {
    return roasts[Math.floor(Math.random() * roasts.length)];
}

module.exports = {
    getRoast
};

