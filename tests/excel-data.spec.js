const { test, expect } = require('@playwright/test');
const { readExcelSheet } = require('../utils/excelReader');

test('read data from excel file', async () => {
  const data = await readExcelSheet('./testdata/employe.xlsx');

  expect(data.length).toBeGreaterThan(0);
  console.log('Excel rows:', data);

  const firstRow = data[0];
  expect(firstRow).toHaveProperty('firstname');
  expect(firstRow).toHaveProperty('lastname');
});
