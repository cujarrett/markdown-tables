#! /usr/bin/env node
import { markdownTables } from "../src/index.js"
if (process.argv.length === 3) {
  markdownTables(process.argv[2], { outputPath: process.argv[3] })
} else if (process.argv.length === 4 && process.argv.includes("--all-sheets")) {
  markdownTables(process.argv[2], {
    allSheets: true,
    outputPath: process.argv[process.argv.indexOf("--all-sheets") === 3 ? 4 : 3],
  })
} else {
  console.log("Usage: markdown-tables <input-file> [output-file] [--all-sheets]")
}
