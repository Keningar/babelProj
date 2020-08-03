import { SheetConnection } from '@db_p/google-spreadsheet-orm';
import credentials from '@utils_p/credentials.json';

let sheetConnection: SheetConnection;

export const dbConnect = async () => {
  // check if the variable that represent our connection exist
  if (sheetConnection) {
    console.log('reusing db');
    return sheetConnection;
  }

  console.log('no reusing db');

  /* connecting to our database */
  sheetConnection = await SheetConnection.connect(
    {
      spreadsheetId: '1LMqdyb0NWdEqWbg-zdrASuG-D9mH9Dur8LYjm1YMs0s',
      migrate: 'safe',
    },
    credentials.client_email,
    credentials.private_key,
    credentials.private_key_id
  );

  return sheetConnection;
};
