const fs = require("fs")
const tape = require("tape-async")
const util = require("util")
const { markdownTables } = require("../src/index.js")

tape("markdown-tables empty data file end to end use test", async (assert) => {
  assert.plan(2)

  // eslint-disable-next-line max-len
  const expected = `| Foo | Bar | Baz |
|-----|-----|-----|
| A   |     | C   |
| 1   | 2   | 3   |
| x   | y   | z   |
`

  let actual = await markdownTables("./test/empty-data-row-test-input.xlsx")
  assert.equal(actual, expected, "Converts .xslx to .md table as expected")

  // eslint-disable-next-line max-len
  await markdownTables("./test/empty-data-row-test-input.xlsx", "./test/empty-data-row-test-output.md")
  const read = util.promisify(fs.readFile)
  actual = await read("./test/empty-data-row-test-output.md")
  actual = actual.toString()
  assert.equal(actual, expected, "Converts .xslx to .md table via command line as expected")
  assert.end()
})
