const fs = require("fs")

const countOccurrences = (string, whatToLookFor) => {
  const regExp = new RegExp(whatToLookFor, "gi")
  return (string.match(regExp) || []).length
}

const getColumnCount = (data) => {
  let row = data.split(/\r?\n|\r/g)
  if (row === undefined) {
    row = data
  } else {
    row = row[0]
  }
  return countOccurrences(row, ",") + 1
}

const getLongestElementLength = (column) => {
  let longest = 0

  for (const element of column) {
    if (element) {
      const elementLength = element.length
      if (elementLength > longest) {
        longest = elementLength
      }
    }
  }

  return longest
}

const createColumns = (data) => {
  const columns = []
  const numberOfColumns = getColumnCount(data)

  for (let column = 0; column < numberOfColumns; column++) {
    columns.push([])
  }

  return columns
}

const createDataColumns = (data) => {
  const rows = data.split(/\r?\n|\r/g)
  const columns = createColumns(data)
  const numberOfColumns = columns.length

  for (const row of rows) {
    for (let column = 0; column < numberOfColumns; column++) {
      const element = row.split(",")
      if (element[column] || element[column] === "") {
        columns[column].push(element[column])
      }
    }
  }

  return columns
}

const findColumnWidths = (columns) => {
  const columnWidths = []
  const numberOfColumns = columns.length

  for (let column = 0; column < numberOfColumns; column++) {
    const longest = getLongestElementLength(columns[column])
    columnWidths.push(longest)
  }

  return columnWidths
}

const getColumnSpaces = (element, columnWidth) => {
  let output = ""

  if (element !== undefined) {
    const spacesNeeded = columnWidth - element.length
    for (let spaces = 0; spaces < spacesNeeded; spaces++) {
      output += " "
    }
  }

  return output
}

const getColumnHyphens = (element, columnWidth) => {
  let output = ""

  if (element !== undefined) {
    const hyphensNeeded = columnWidth - element.length
    for (let hyphens = 0; hyphens < hyphensNeeded; hyphens++) {
      output += "-"
    }
  }

  return output
}

const markdownTables = (data) => {
  const hasHeaders = true
  const rows = data.split(/\r?\n|\r/g)
  let output = ""

  const columns = createDataColumns(data)
  const numberOfColumns = columns.length
  const columnWidths = findColumnWidths(columns)

  const getHeaderLineBreak = () => {
    let output = ""
    for (let width of columnWidths) {
      // Add two to account for padding on both sides of data
      width += 2
      output += "|"
      for (let currentWidth = 0; currentWidth < width; currentWidth++) {
        output += "-"
      }
    }
    output += "|\n"
    return output
  }

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const rowNotUndefined = rows[rowIndex] !== undefined
    const rowHasData = rows[rowIndex] !== ""

    if (rowNotUndefined && rowHasData) {
      const headerRow = rowIndex === 1

      if (headerRow && hasHeaders) {
        output += getHeaderLineBreak()
      }

      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        const element = columns[columnIndex][rowIndex]

        if (element !== undefined) {
          const spaces = getColumnSpaces(element, columnWidths[columnIndex])
          output += `| ${element}${spaces} `
          if (columnIndex === numberOfColumns - 1) {
            output += "|\n"
          }
        }
      }
    }
  }
  return output
}

const markdownTablesCli = (inputPath, outputPath) => {
  const writeOutput = (filePath, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, (error) => {
        if (error) {
          reject(error)
        }
        // eslint-disable-next-line no-console
        console.log(`The file was written to ${outputPath}.`)
      })
    })
  }

  const getInput = (filePath) => {
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

  getInput(inputPath)
    .then((data) => markdownTables(data))
    .then((output) => writeOutput(outputPath, output))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(`Error ${error}`))
}

module.exports = markdownTables
module.exports.markdownTablesCli = markdownTablesCli
module.exports.countOccurrences = countOccurrences
module.exports.getColumnCount = getColumnCount
module.exports.getLongestElementLength = getLongestElementLength
module.exports.createColumns = createColumns
module.exports.createDataColumns = createDataColumns
module.exports.findColumnWidths = findColumnWidths
module.exports.getColumnSpaces = getColumnSpaces
module.exports.getColumnHyphens = getColumnHyphens
