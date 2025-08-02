![Logo: Monkey holding banana with a terminal showing 'fixed it. probably.'](commitmonkey-logo.png)

# commitmonkey

commitmonkey is a Git hook that rewrites your boring commit messages into brutally honest, questionably professional
roasts.

Because if you're going to break prod, at least be funny about it.

## Get started

### Get OpenAI API Key
To generate messages that are relevant, it's best to use OpenAI.

Create a project, add come credits and get an API key

https://platform.openai.com/

### Install commitmonkey

```shell
npm install -g commitmonkey
```

### Set options

You configure options with yaml file in home directory `~/.commitmonkey.yaml`

| option     | details                                                                                                    |
|------------|------------------------------------------------------------------------------------------------------------|
| mode       | Specify how the commit message is updated. Options: `replace` , `append`                                   |
| profile    | Specify the personality to use. You can use anything you like here. Ideas: `intern`, `senior`, `ai`, `cto` |
| strategy   | Specify roast strategy. Options: `openai`, `basic` (hard coded replacements)                               |
| openApiKey | OpenAI API key to generate roasts. Needed for openai strategy.                                             |

```shell
cat > ~/.commitmonkey.yaml << 'END'
mode: replace
profile: cto
strategy: openai 
openApiKey: <ADD_YOUR_API_KEY>
END
```

### Install Hook

commitmonkey uses git hooks. The hook needs to be initialized in each repo you want to be roasted in.
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
