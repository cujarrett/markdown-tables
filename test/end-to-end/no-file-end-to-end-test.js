import test from "ava"
import { markdownTables } from "../../src/index.js"

test("End to End - no file ", async (assert) => {
  try {
    await markdownTables("foo")
  } catch (error) {
    const expectedErrorMessage = "ENOENT: no such file or directory, open 'foo'"
    assert.is(error.message, expectedErrorMessage)
  }
})
