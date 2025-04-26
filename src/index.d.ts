declare module 'markdown-tables' {
  /**
   * Reads and parses an Excel file into JSON data
   * @param filePath - Path to the Excel file
   * @param sheetNumber - Index of the sheet to read (defaults to 0)
   * @returns Promise resolving to an array of objects representing the sheet data
   */
  export function getInput(filePath: string, sheetNumber?: number): Promise<Record<string, any>[]>;

  /**
   * Reads and parses an Excel file into JSON data
   * @param filePath - Path to the Excel file
   * @returns Promise resolving to the number of sheets in the Excel file
   */
  export function getNumberOfSheets(filePath: string): Promise<number>;

  /**
   * Transforms the input data into column-based format
   * @param data - Array of objects representing the sheet data
   * @returns Array of columns, where each column is an array of values
   */
  export function getColumns(data: Record<string, any>[]): string[][];

  /**
   * Calculates the width needed for a column based on its longest value
   * @param column - Array of values in a column
   * @returns The width needed for the column
   */
  export function getColumnWidth(column: string[]): number;

  /**
   * Calculates the width needed for all columns
   * @param columns - Array of columns
   * @returns Array of column widths
   */
  export function getAllColumnWidths(columns: string[][]): number[];

  /**
   * Generates the markdown table header separator line
   * @param columnWidths - Array of column widths
   * @returns The header separator line as a string
   */
  export function getHeaderLineBreak(columnWidths: number[]): string;

  interface Options {
    allSheets?: boolean;
    outputPath?: string;
  }

  /**
   * Generates the output file path
   * @param idx - Index of the sheet
   * @param outputPath - Path to the output file
   * @returns The output file path
   */
  export function getOutputFilePath(idx: number, outputPath: string): string;

  /**
   * Converts Excel data to a markdown table
   * @param input - Path to the input Excel file
   * @param options - Options for the conversion
   * @returns Promise resolving to the markdown table as a string
   */
  export default function markdownTables(input: string, options?: Options): Promise<string | string[]>;
}
