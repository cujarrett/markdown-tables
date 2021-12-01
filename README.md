![markdown-tables-logo](./media/markdown-tables-logo.png)

<p align="center">
  <a href="https://github.com/cujarrett/markdown-tables/actions"><img alt="CI/CD" src="https://github.com/cujarrett/markdown-tables/actions/workflows/release.yml/badge.svg"></a>
  <a href="https://www.npmjs.com/package/markdown-tables"><img alt="npm" src="https://img.shields.io/npm/dt/markdown-tables.svg"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img alt="Project uses semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?"></a>
</p>

## What & Why

Convert Excel (.xlsx) data into markdown tables friendly for GitHub or GitLab.

## Use
There are two ways to use Markdown Tables. You can use it in a Node JS
project or you can use it directly via the command line.

### Use via command line
```
npm install -g markdown-tables
markdown-tables ./path/to/input/file.xlsx ./output.md
```

![demo](https://user-images.githubusercontent.com/16245634/126058164-048b63f0-7dce-445e-a0c5-8d53956b2bea.gif)

### Use via Node JS project

Adding markdown-tables to your Node project for use

```
npm install markdown-tables --save
```

You use `markdown-tables` as such

```
import markdownTables from "markdown-tables"
const markdownTable = markdownTables(xlsxFilePath)
```

## Want to contribute to Markdown Tables?
Check out the [CONTRIBUTING](./CONTRIBUTING.md) doc.

## Changelog
Check out the [CHANGELOG](./CHANGELOG.md) doc.
