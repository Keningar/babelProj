import { AbstractModel } from '../models/AbstractModel';

/**
 * Adds information about worskheed into meta
 * @param  {number} workSheetId
 */
export const worksheet = (workSheetId: number, workSheetName?: string) => (
  target: typeof AbstractModel
) => {
  const name = workSheetName ?? target.name;
  Reflect.defineMetadata('schema:workSheetId', workSheetId, target);
  Reflect.defineMetadata('schema:workSheetName', name, target);

  if (global.models) {
    //TODO Every time nextjs compile the same target is include. Temporal Solution ⮧
    if (!global.models.some(model => model.id === workSheetId))
      global.models.push({ target, id: workSheetId });
  } else {
    global.models = [];
    global.models.push({ target, id: workSheetId });
  }
};
