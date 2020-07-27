import 'reflect-metadata';
import { AbstractModel } from '../models/AbstractModel';
import SheetConnection from '../';

export type SchemaColumns = string[];
/**
 * Adds collumn name into collumns metadata of model class
 * @param  {any} target
 * @param  {string} key
 */
export const column = (target: AbstractModel, key: string) => {
  let colMeta = SheetConnection.getModelCollumns(
    target.constructor as typeof AbstractModel
  );
  // The split method is for make it compatible with the quote('?') in the name of the options for typeGraphql
  // colMeta.push(key.split('?')[0]);
  colMeta.push(key);
  SheetConnection.setModeCollumns(
    target.constructor as typeof AbstractModel,
    colMeta
  );
};
