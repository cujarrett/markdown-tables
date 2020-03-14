![markdown-tables-logo](./media/markdown-tables-logo.png)

<p align="center">
  <a href="https://circleci.com/gh/cujarrett/glimpse/tree/master"><img alt="Circle CI" src="https://circleci.com/gh/cujarrett/glimpse/tree/master.svg?style=svg"></a>
  <a href="https://www.npmjs.com/package/markdown-tables"><img alt="npm" src="https://img.shields.io/npm/dt/markdown-tables.svg"></a>
</p>

## What & Why

Convert Excel (.xlsx) data into markdown tables friendly for GitHub or GitLab.

## Use
There are two ways to use Markdown Tables. You can use it in a Node JS
project or you can use it directly via the command line.

Sample input Excel (.xlsx) data:
```
Label,Square Footage,Color
Office,224,Blue
Kitchen,230,Green
Clothes Closet,45,Yellow
Storage Closet,56,Red
```

Sample output md data:
```
| Label          | Square Footage | Color  |
|----------------|----------------|--------|
| Office         | 224            | Blue   |
| Kitchen        | 230            | Green  |
| Clothes Closet | 45             | Yellow |
| Storage Closet | 56             | Red    |
```

**Using via a Node JS project**
- Adding markdown-tables to your Node project for use
```
npm install markdown-tables --save
```
- You use `markdown-tables` as such
```
const markdownTables = require("markdown-tables")
...
const markdownTable = markdownTables(xlsxFilePath)
```

**Using via command line with markdown-tables installed globally**
```
npm install -g markdown-tables
markdown-tables ./<path to input file>/input.xlsx ./out.md
```

## Want to contribute to Markdown Tables?
Check out the [CONTRIBUTING](./CONTRIBUTING.md) doc.

## Changelog
Check out the [CHANGELOG](./CHANGELOG.md) doc.
