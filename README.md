
![Logo: Monkey holding banana with a terminal showing 'fixed it. probably.'](commitmonkey-logo.png)

# commitmonkey
commitmonkey is a Git hook that rewrites your boring commit messages into brutally honest, questionably professional roasts.

Because if you're going to break prod, at least be funny about it.


## Get started

### Get commitmonkey
```shell
npm install -g commitmonkey
```

### set options
You configure options with yaml file in home directory `~/.commitmonkey.yaml`

| option | details                                                                 |
|--------|-------------------------------------------------------------------------|
| mode   | Specify how the commit message is updated. Options: `replace` , `append` |
| profile | Specify the personaility to use. Options: `intern`, `senior`, `ai`      |

```shell
cat > ~/.commitmonkey.yaml << 'END'
mode: replace
profile: intern
END
```


### Install Hook

commitmonkey utilizes git hooks. The hook needs to be initialized in each repo you want to be roasted in.
Note: if you have any custom `commit-msg` - it will be overwritten.

```shell
cd ~/my-git-project
commitmonkey init-hook
```

## Git Commits

```shell
# you commit:
git commit -m "fix typo"

# roast appears:
"Fixed a bug. Or made it worse. Who knows?"
```
