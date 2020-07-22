import { QueryResolvers } from '../type-defs.graphqls';
import { ResolverContext } from '@utils_p/apollo';
import { accessSpreadsheet } from '../../db/SpreadSheetConection';

const Query: QueryResolvers<ResolverContext> = {
  getArticles: async (_, _args) => {
    return await accessSpreadsheet(_args.link);
  },
};

export default { Query };
