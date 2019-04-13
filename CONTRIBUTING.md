# Contributing Guide

If you're new to contributing to open source software
[this guide](https://opensource.guide/how-to-contribute/) guide is a great read.

## Not sure where to start?
A great place to jump in are issues labeled [Beginner Friendly](https://github.com/cujarrett/markdown-tables/labels/Beginner%20Friendly).

## Chat
Feel free to join the [markdown-tables Discord](https://discord.gg/2pw75YQ) if you have questions.

## Pull Request Checklist
- [ ] - 100% code coverage with thoughtful unit, integration, and end to end tests
- [ ] - Documentation is updated if needed
- [ ] - Passing CI pipeline

## Developer Setup
Setup and use requires [Git](https://git-scm.com/), [Node JS](https://nodejs.org/en/), and a text
editor such as [VS Code](https://code.visualstudio.com/).

markdown-tables is built for Node 8 and up but we develop using Node 10 LTS and npm. You can
check your node version with `node -v` and your npm version with `npm -v`.

If you're on a Mac, I'd suggest using [Homebrew](https://brew.sh/) for installing the required
software listed in Setup.

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

#### Updating Changelogs

We ask that all changes that affect consumers of the project have details outlined in the branch and
merge request where the code was proposed. This helps all consumers and other contributors/
maintainers know what changed and when. This includes both the change entry as well as the compare
tag link at the bottom.

Example:

```md
## [v0.1.1] - 2018-07-10
### Fixed
- rare duplicate header problem

## [v0.1.0] - 2018-07-06
### Added
- basic Excel (.xsls) to markdown table support

[0.1.1]: https://github.com/cujarrett/markdown-tables/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/cujarrett/markdown-tables/releases/tag/v0.1.0
```
