
![Logo: Monkey holding banana with a terminal showing 'fixed it. probably.'](commitmonkey-logo.png)

# commitmonkey
commitmonkey is a Git hook that rewrites your boring commit messages into brutally honest, questionably professional roasts.

Because if you're going to break prod, at least be funny about it.


## Get started

### Install Hook

commitmonkey utilizes git hooks. The hook needs to be initialized in each repo.

```shell
npx @commitmonkey/commitmonkey init
```

### Usage

```shell
# you commit:
git commit -m "fix typo"

# roast appears:
"Fixed a typo. Now only 473 problems remain."
```

### Override2

Lets you commit your original message (for release tags or actual grown-up work).

```shell
git commit -m "ABC-123: Urgent" --serious
```

