const ExcelJS = require('exceljs');
const path = require('path');

async function readExcelSheet(filePath, sheetName = 1) {
  const workbook = new ExcelJS.Workbook();
  const resolvedPath = path.resolve(filePath);

  await workbook.xlsx.readFile(resolvedPath);

  const worksheet = typeof sheetName === 'number'
    ? workbook.getWorksheet(sheetName)
    : workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }

  const headers = [];
  worksheet.getRow(1).values.forEach((value, index) => {
    if (index > 0) {
      headers.push(value);
    }
  });

  const rows = [];
  for (let rowIndex = 2; rowIndex <= worksheet.rowCount; rowIndex += 1) {
    const row = worksheet.getRow(rowIndex);
    const isEmpty = row.values.slice(1).every((value) => value === null || value === undefined || value === '');

    if (isEmpty) continue;

    const record = {};
    headers.forEach((header, index) => {
      record[header] = row.getCell(index + 1).value;
    });

    rows.push(record);
  }

  return rows;
}

module.exports = { readExcelSheet };
