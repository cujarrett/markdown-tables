# Contributing Guide

If you're new to contributing to open source software
[this guide](https://opensource.guide/how-to-contribute/) guide is a great read.

## Not sure where to start?
A great place to jump in are issues labeled
[good first issue](https://github.com/cujarrett/markdown-tables/labels/good%20first%20issue).

## Chat
Feel free to join the [markdown-tables Discord](https://discord.gg/2pw75YQ) if you have questions.

## Pull Request Checklist
- [ ] - 100% code coverage with thoughtful unit, integration, and end to end tests
- [ ] - Documentation is updated if needed
- [ ] - Passing CI pipeline

## Developer Setup
Setup and use requires [Git](https://git-scm.com/), [Node JS](https://nodejs.org/en/), and a text
editor such as [VS Code](https://code.visualstudio.com/).

This project is built for Node 8 and up but we develop using Node LTS and npm.
You can check your node version with `node -v` and your npm version with `npm
-v`.

If you're on a Mac, I'd suggest using [Homebrew](https://brew.sh/) for
installing the required software listed in Setup.

## Code Setup
Clone this project with Git to your preferred location.

#### Cloning & Dependency Installations
```sh
git clone https://github.com/cujarrett/markdown-tables.git
cd markdown-tables
npm install
```

#### Run Linting

Finds problematic patterns or code that doesn’t adhere to certain style guidelines

```sh
npm run lint
```

#### Fix linting errors (automated)

```sh
npm run fix-lint
```

#### Run tests

Runs the unit and integration tests.

```sh
npm run test
```

#### Run Continuous Integration pipeline

Runs linting and tests, same as in the CI pipeline.
```sh
npm run ci
```

## Commiting

### Commit Message Guidelines

This project follows the [Conventional
Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) specification to aid in automated
releases and change log generation.
[Commitlint](https://github.com/conventional-changelog/commitlint) is enabled and ran as a
`commit-msg` hook to enforce the commit format.  [Commitizen](http://commitizen.github.io/cz-cli/)
can be used to prompt through any requirements at commit time `npm run commit` (or `git cz` if
Commitizen is installed globally).

In short, if a commit will be fixing a bug, prefix the commit message with `fix:`

```bash
fix: my bug fix
```

If a commit will be adding a feature, prefix the commit message with `feat:`

```bash
feat: my new feature
```

Commits with `fix:` prefix will show up in the generated changelog as bullets under the `Bug Fixes:`
section, and `feat:` prefixed messages will show under the `Features:` section. For more on the
available prefixes/rules, see
[here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules).
