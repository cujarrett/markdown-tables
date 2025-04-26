import test from "ava"
import fs from "fs"
import util from "util"
import { markdownTables } from "../../src/index.js"

test("End to End - multi-sheet", async (assert) => {
  const expected = [
`| Header 1  | Header-2      | “Header 3”          | ‘Header 4’       | Header-2_1         |
|-----------|---------------|---------------------|------------------|--------------------|
| Some data | frogs         | Joe’s Fish          | Part             | Pina               |
| Oil       | “Yellow Tuna” |                     | Work, Work, Work | Yellow             |
| 11        | Header-2      | Sharks;Birds;People | Great            | Gifs make me smile |
`,
`| H 1       | H-2           | “H 3”               | ‘H 4’            | H-2_1              |
|-----------|---------------|---------------------|------------------|--------------------|
| More data | frogs         | Joe’s Fish          | Part             | Colada             |
| Oil       | “Yellow Tuna” |                     | Work, Work, Work | Yellow             |
| 11        | Header-2      | Sharks;Birds;People | Great            | Gifs make me smile |
`]

  let actual = await markdownTables("./test/data/multi-sheet-test-input.xlsx", { allSheets: true })
  assert.deepEqual(actual, expected)

  await markdownTables("./test/data/multi-sheet-test-input.xlsx", { allSheets: true, outputPath: "./test/data/multi-sheet-test-output-{number}.md" })
  const read = util.promisify(fs.readFile)
  actual = await read("./test/data/multi-sheet-test-output-0.md")
  actual = actual.toString()
  assert.is(actual, expected[0])
  actual = await read("./test/data/multi-sheet-test-output-1.md")
  actual = actual.toString()
  assert.is(actual, expected[1])
})
