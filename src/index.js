const fs = require("fs")
const util = require("util")
const xlsx = require("xlsx")

module.exports.getInput = async (filePath, sheetNumber = 0) => {
  const workbook = xlsx.readFile(filePath)
  const sheetNames = workbook.SheetNames
  const input = workbook.Sheets[sheetNames[sheetNumber]]
  return xlsx.utils.sheet_to_json(input, { raw: true })
}

module.exports.getColumns = (data) => {
  let headers = []
  const columns = []
  let maxRowLength = 0

  for (const rowItems of data) {
    if (Object.keys(rowItems).length > maxRowLength) {
      headers = [...Object.keys(rowItems)]
      maxRowLength = Object.keys(rowItems).length
    }
  }

  for (const header of headers) {
    const column = [header]
    for (const row of data) {
      const value = row[header] || ""
      column.push(value)
    }
    columns.push(column)
  }

  return columns
}

module.exports.getColumnWidth = (column) => {
  let longest = 0

  for (const element of column) {
    if (element) {
      const elementLength = element.length
      if (elementLength > longest) {
        longest = elementLength
      }
    }
  }

  const columnWidth = longest
  return columnWidth
}

module.exports.getAllColumnWidths = (columns) => {
  const columnWidths = []
  const numberOfColumns = columns.length

  for (let column = 0; column < numberOfColumns; column++) {
    const longest = this.getColumnWidth(columns[column])
    columnWidths.push(longest)
  }

  return columnWidths
}

module.exports.getHeaderLineBreak = (columnWidths) => {
  let output = ""
  for (let width of columnWidths) {
    // Add three to account for padding on both sides of data and leading |
    width += 3
    output += "|".padEnd(width, "-")
  }
  output += "|\n"
  return output
}

module.exports.markdownTables = async (input, outputPath) => {
  try {
    const table = await this.getInput(input)
    const columns = this.getColumns(table)
    const columnWidths = this.getAllColumnWidths(columns)
    let output = ""

    for (let rowIndex = 0; rowIndex < table.length + 1; rowIndex++) {
      const headerRow = rowIndex === 1
      if (headerRow) {
        output += this.getHeaderLineBreak(columnWidths)
      }

      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        let element = columns[columnIndex][rowIndex] || ""
        element = element.toString()
        const columnWidth = columnWidths[columnIndex]
        output += `| ${element.padEnd(columnWidth, " ")} `
        if (columnIndex === columns.length - 1) {
          output += "|\n"
        }
      }
    }

    if (outputPath) {
      const write = util.promisify(fs.writeFile)
      await write(outputPath, output)
      // eslint-disable-next-line no-console
      console.log(`The file was written to ${outputPath}`)
    }

    return output
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    throw error
  }
}
