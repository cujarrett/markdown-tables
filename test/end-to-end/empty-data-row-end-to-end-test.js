import test from "ava"
import fs from "fs"
import util from "util"
import { markdownTables } from "../../src/index.js"

test("End to End - empty row", async (assert) => {
  const expected = `| Foo | Bar | Baz |
|-----|-----|-----|
| A   |     | C   |
| 1   | 2   | 3   |
| x   | y   | z   |
`

  let actual = await markdownTables("./test/data/empty-data-row-test-input.xlsx")
  assert.is(actual, expected)

  // eslint-disable-next-line max-len
  await markdownTables("./test/data/empty-data-row-test-input.xlsx", "./test/data/empty-data-row-test-output.md")
  const read = util.promisify(fs.readFile)
  actual = await read("./test/data/empty-data-row-test-output.md")
  actual = actual.toString()
  assert.is(actual, expected)
})
