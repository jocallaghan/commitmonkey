const fs = require('fs');
const {execSync} = require('child_process');
const {dirname} = require('path');
const path = require("node:path");
const targetRepo = dirname(require.main.filename);


function initHook() {

    const gitDir = getCurrentGitDir();
    let hookContent = getHookContent();

    // Replace the placeholder with the actual path to the hook
    hookContent = hookContent.replace('__COMMITMONKEY_HOOK_PATH__', getCodemonkeyPath());

    const hookPath = path.join(gitDir, 'hooks', 'commit-msg');

    try {
        fs.writeFileSync(hookPath, hookContent, { mode: 0o755 });
        console.log('✅ CommitMonkey hook installed [' + hookPath + ']');
    } catch (err){
        console.error(err);
        console.error('❌ CommitMonkey hook not installed');
        process.exit(1);
    }
}


function getCurrentGitDir() {
    try {
        return execSync('git rev-parse --git-dir').toString().trim();
    } catch (err){
        console.error('❌ CommitMonkey must be run from a git repository');
        process.exit(1);
    }
}

function getCodemonkeyPath() {
    try {
        return execSync('which commitmonkey').toString().trim();
    } catch (err){
        console.error(err);
        console.error('❌ CommitMonkey first be installed with `npm install -g commitmonkey`');
        process.exit(1);
    }
}

function getHookContent() {
    try {
        return  fs.readFileSync(targetRepo + '/commit-msg', 'utf8');
    } catch (err){
        console.error(err);
        console.error('❌ CommitMonkey had an issue loading the hook template.');
        process.exit(1);
    }
}

module.exports = {
    initHook
};
