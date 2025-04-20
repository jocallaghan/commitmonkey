const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);


function initHook() {
    const gitDir = getCurrentGitDir();
    const hookContent = getHookContent();
    const hookPath = path.join(gitDir, 'hooks', 'commit-msg');
    installHook(hookPath, hookContent);
}

function getCurrentGitDir() {
    // check if git repo
    try {
        return execSync('git rev-parse --git-dir').toString().trim();
    } catch (err){
        console.error('❌ CommitMonkey must be run from a git repository');
        process.exit(1);
    }
}


function getHookContent() {
    try {
        return  fs.readFileSync(appDir + '/commit-msg', 'utf8');
    } catch (err){
        console.error(err);
        console.error('❌ CommitMonkey had an issue loading the hook template.');
        process.exit(1);
    }
}

function installHook(hookPath, hookContent) {
    try {
        fs.writeFileSync(hookPath, hookContent, { mode: 0o755 });
        console.log('✅ CommitMonkey hook installed [' + hookPath + ']');
    } catch (err){
        console.error(err);
        console.error('❌ CommitMonkey hook not installed');
        process.exit(1);
    }
}

module.exports = {
    initHook
};
