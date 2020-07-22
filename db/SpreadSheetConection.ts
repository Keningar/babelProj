import { GoogleSpreadsheet, GoogleSpreadsheetCell } from 'google-spreadsheet';

import credencials from '@utils_p/credentials.json';
let Cell: GoogleSpreadsheetCell;

const getCell = async () => {
  if (Cell) return Cell;

  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1l4Mr6dW98Yj30NGdwhiTVZ5zL9gsjs4Sf87YyVcXHv4'
  );
  await doc.useServiceAccountAuth(credencials);
  await doc.loadInfo();
  const Sheet = doc.sheetsByIndex[1];
  await Sheet.loadCells('A1:A1');
  Cell = Sheet.getCellByA1('A1');

  return Cell;
};

export const accessSpreadsheet = async (link: string) => {
  const cell = await getCell();

  cell.formula = `=BUSCAR("${link}",Data!A:A,Data!B:B)`;
  await cell.save();

  const data = JSON.parse(cell.value as string);

  return data;
};
