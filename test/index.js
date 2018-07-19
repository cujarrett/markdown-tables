const fs = require("fs")
const tape = require("tape")

const markdownTables = require("../src/index.js")

let input
let expected

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error)
      }
      const content = data.toString()
      resolve(content)
    })
  })
}

const getInput = () => {
  const inputPath = "./test/input.csv"
  return readFile(inputPath)
}

const getExpected = () => {
  const expectedPath = "./test/expected.md"
  return readFile(expectedPath)
}

const setInput = (data) => {
  input = data
}

const setExpected = (data) => {
  expected = data
}

const endToEndTest = () => {
  tape("markdown-tables end to end test", (assert) => {
    assert.plan(1)
    const actual = markdownTables(input)
    assert.equal(actual, expected, "Converts csv to md table as expected")
    assert.end()
  })
}

const unitTest = () => {
  tape("unit tests", (assert) => {
    assert.plan(8)

    let expected
    let actual

    expected = 2
    actual = markdownTables.countOccurrences("JavaScript", "a")
    assert.equal(actual, expected, "`countOccurrences` test")

    expected = 3
    actual = markdownTables.getColumnCount("a, b, c")
    assert.equal(actual, expected, "`getColumnCount` test")

    expected = 4
    actual = markdownTables.getLongestElementLength(["Go", "C", "Ruby"])
    assert.equal(actual, expected, "`getLongestElementLength` test")

    expected = 3
    let testData = "yellow, blue, red"
    actual = markdownTables.createColumns(testData)
    actual = actual.length
    assert.equal(actual, expected, "`createColumns` test")

    expected = [["1", "a"], ["2", "b"], ["3", "c"]]
    testData = "1,2,3\na,b,c"
    actual = markdownTables.createDataColumns(testData)
    assert.deepEqual(actual, expected, "`createDataColumns` test")

    expected = [10, 6]
    testData = [["I", "Love", "JavaScript"], ["red", "purple", "blue"]]
    actual = markdownTables.findColumnWidths(testData)
    assert.deepEqual(actual, expected, "`findColumnWidths` test")

    expected = "  "
    actual = markdownTables.getColumnSpaces("red", 5)
    assert.deepEqual(actual, expected, "`getColumnSpaces` test")

    expected = "----"
    actual = markdownTables.getColumnHyphens("green", 9)
    assert.deepEqual(actual, expected, "`getColumnHyphens` test")

    assert.end()
  })
}

getInput()
  .then((data) => setInput(data))
  .then(() => getExpected())
  .then((data) => setExpected(data))
  .then(() => unitTest())
  .then(() => endToEndTest())
  // eslint-disable-next-line no-console
  .catch((error) => console.log(`Error!! ${error}`))
