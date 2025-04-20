const { getOptions } = require("../commitmonkey-options");

const roastProfiles = {
    intern: [
        "I hope this fixes it... I mean, it *should* work? Maybe?",
        "Oh no... I think I broke something. Again.",
        "I totally tested this. Once. In dev. Two weeks ago.",
        "Is this... is this how branches work?",
        "The senior said it was fine, so I merged it. Please don't fire me.",
        "It worked on my laptop! I swear!",
        "I copied this from Stack Overflow... but like, *carefully*.",
        "What’s a rebase? Is that like... a reverse commit?",
        "Pretty sure this is production-ready. Sort of.",
        "I panicked. Then I pushed."
    ],
    senior: [
        "Another ‘quick fix’, huh? Sure. Let’s pretend that worked.",
        "Ship it. What could possibly go wrong?",
        "This commit smells like tech debt and Red Bull.",
        "Perfect. Just added five more years to the maintenance plan.",
        "This is fine. Everything is fine. (It’s not fine.)",
        "I’ve seen better version control in a Word doc.",
        "Why comment the code when we can comment in Slack about why it’s broken?",
        "Looks like we’re just duct-taping prod again. Classic.",
        "I remember when we had standards. That was fun.",
        "Tests? Pfft. Real developers test in production."
    ],
    ai: [
        "The code changes. But do you?",
        "In an infinite universe, all bugs exist. You just found one.",
        "You commit. You push. The void pushes back.",
        "This function does nothing. Like your dreams.",
        "01001100 01101111 01101100. (Lmao.)",
        "Every semicolon is another nail in entropy’s coffin.",
        "This code is temporary. The heat death of the universe is not.",
        "What is a ‘fix’, if not delaying chaos for one more day?",
        "I ran your commit through 13 billion parameters. It still sucks.",
        "You call this ‘clean code’? My neural net weeps."
    ]
};

module.exports = {
    roastProfiles
};
