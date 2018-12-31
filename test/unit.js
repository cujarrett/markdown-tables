const isEqual = require("lodash/isEqual")
const tape = require("tape-async")
const markdownTables = require("../src/index.js")

tape("unit tests", async (assert) => {
  assert.plan(5)
  let expected = ""
  let actual = ""

  expected = [{
    "Header 1": "Some data",
    "Header-2": "frogs",
    "“Header 3”": "Joe’s Fish",
    "‘Header 4’": "Part",
    "Header-2_1": "Pina"
  }, {
    "Header 1": "Oil",
    "Header-2": "“Yellow Tuna”",
    "‘Header 4’": "Work, Work, Work",
    "Header-2_1": "Yellow"
  }, {
    "Header 1": 11,
    "Header-2": "Header-2",
    "“Header 3”": "Sharks;Birds;People",
    "‘Header 4’": "Great",
    "Header-2_1": "Gifs make me smile"
  }]
  actual = await markdownTables.getInput("./test/test-input.xlsx")
  assert.true(isEqual(actual, expected), "`getInput` test")

  const mockInput = [{
    red: 1,
    blue: 2,
    green: 3
  }, {
    red: 4,
    blue: 5,
    green: 6
  }]
  expected = [["red", 1, 4], ["blue", 2, 5], ["green", 3, 6]]
  actual = markdownTables.getColumns(mockInput)
  assert.true(isEqual(actual, expected), "`getColumns` test")

  expected = 6
  actual = markdownTables.getColumnWidth(["a", "bubble", "c"])
  assert.equal(actual, expected, "`findColumnWidths` test")

  expected = [1, 3]
  actual = markdownTables.getAllColumnWidths([["a", "b", "c"], ["d", "two"]])
  assert.true(isEqual(actual, expected), "`getAllColumnWidths` test")

  expected = "|---|-------|---|\n"
  actual = markdownTables.getHeaderLineBreak([1, 5, 1])
  assert.equal(actual, expected, "`getHeaderLineBreak` test")

  assert.end()
})
