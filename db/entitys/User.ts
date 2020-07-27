import { AbstractModel, worksheet, column } from '@db_p/google-spreadsheet-orm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@worksheet(0)
export class User extends AbstractModel {
  @Field(type => String)
  @column
  username: string;

  @Field(type => String)
  @column
  email: string;

  @Field(type => String)
  @column
  fullname: string;
}
