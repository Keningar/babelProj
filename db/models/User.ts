import { AbstractModel, worksheet, column } from '@db_p/google-spreadsheet-orm';

@worksheet(0)
export class User extends AbstractModel {
  @column
  username;
  @column
  email;
  @column
  fullname;
}
const UserInstance = new User();
export const getUserInstance = () => UserInstance;
