import fs from "fs"
import test from "ava"
import util from "util"
import { markdownTables } from "../../src/index.js"

test("End to End - normal", async (assert) => {
  // eslint-disable-next-line max-len
  const expected = `| Header 1  | Header-2      | “Header 3”          | ‘Header 4’       | Header-2_1         |
|-----------|---------------|---------------------|------------------|--------------------|
| Some data | frogs         | Joe’s Fish          | Part             | Pina               |
| Oil       | “Yellow Tuna” |                     | Work, Work, Work | Yellow             |
| 11        | Header-2      | Sharks;Birds;People | Great            | Gifs make me smile |
`

  let actual = await markdownTables("./test/data/normal-test-input.xlsx")
  assert.is(actual, expected, "Converts .xslx to .md table as expected")

  await markdownTables("./test/data/normal-test-input.xlsx", "./test/data/normal-test-output.md")
  const read = util.promisify(fs.readFile)
  actual = await read("./test/data/normal-test-output.md")
  actual = actual.toString()
  assert.is(actual, expected)
})
