const fs = require("fs")
const tape = require("tape-async")
const util = require("util")
const { markdownTables } = require("../src/index.js")

tape("markdown-tables normal file end to end use test", async (assert) => {
  assert.plan(2)

  // eslint-disable-next-line max-len
  const expected = `| Header 1  | Header-2      | “Header 3”          | ‘Header 4’       | Header-2_1         |
|-----------|---------------|---------------------|------------------|--------------------|
| Some data | frogs         | Joe’s Fish          | Part             | Pina               |
| Oil       | “Yellow Tuna” |                     | Work, Work, Work | Yellow             |
| 11        | Header-2      | Sharks;Birds;People | Great            | Gifs make me smile |
`

  let actual = await markdownTables("./test/normal-test-input.xlsx")
  assert.equal(actual, expected, "Converts .xslx to .md table as expected")

  await markdownTables("./test/normal-test-input.xlsx", "./test/normal-test-output.md")
  const read = util.promisify(fs.readFile)
  actual = await read("./test/normal-test-output.md")
  actual = actual.toString()
  assert.equal(actual, expected, "Converts .xslx to .md table via command line as expected")
  assert.end()
})
