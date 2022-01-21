#! /usr/bin/env node
import { markdownTables } from "../src/index.js"
markdownTables(process.argv[2], process.argv[3])
