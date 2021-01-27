const tape = require("tape-async")
const { markdownTables } = require("../src/index.js")

tape("markdown-tables no file file end to end use test", async (assert) => {
  assert.plan(1)
  try {
    await markdownTables("foo")
  } catch (error) {
    const expectedErrorMessage = "ENOENT: no such file or directory, open 'foo'"
    assert.equal(error.message, expectedErrorMessage, "markdownTables error handling verified")
  }

  assert.end()
})
