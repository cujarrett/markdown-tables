import test from "ava"
// eslint-disable-next-line max-len
import { getInput, getColumns, getColumnWidth, getAllColumnWidths, getHeaderLineBreak } from "../src/index.js"

test("Unit - getInput", async (assert) => {
  const expected = [
    {
      "Header 1": "Some data",
      "Header-2": "frogs",
      "“Header 3”": "Joe’s Fish",
      "‘Header 4’": "Part",
      "Header-2_1": "Pina"
    },
    {
      "Header 1": "Oil",
      "Header-2": "“Yellow Tuna”",
      "“Header 3”": "",
      "‘Header 4’": "Work, Work, Work",
      "Header-2_1": "Yellow"
    },
    {
      "Header 1": 11,
      "Header-2": "Header-2",
      "“Header 3”": "Sharks;Birds;People",
      "‘Header 4’": "Great",
      "Header-2_1": "Gifs make me smile"
    }
  ]

  const actual = await getInput("./test/data/normal-test-input.xlsx")
  assert.deepEqual(actual, expected)
})

test("Unit - getColumns", async (assert) => {
  const mockInput = [{
    red: 1,
    blue: 2,
    green: 3
  }, {
    red: 4,
    blue: 5,
    green: 6
  }]

  const expected = [["red", 1, 4], ["blue", 2, 5], ["green", 3, 6]]
  const actual = getColumns(mockInput)
  assert.deepEqual(actual, expected)
})

test("Unit - getColumnWidth", async (assert) => {
  const expected = 6
  const actual = getColumnWidth(["a", "bubble", "c"])
  assert.deepEqual(actual, expected)
})

test("Unit - getAllColumnWidths", async (assert) => {
  const expected = [1, 3]
  const actual = getAllColumnWidths([["a", "b", "c"], ["d", "two"]])
  assert.deepEqual(actual, expected)
})

test("Unit - getHeaderLineBreak", async (assert) => {
  const expected = "|---|-------|---|\n"
  const actual = getHeaderLineBreak([1, 5, 1])
  assert.deepEqual(actual, expected)
})
