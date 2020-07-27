import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import ArticleResolver from '@graphql_p/resolvers/articlesResolvers';
import { NextApiRequest, NextApiResponse } from 'next';

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    const schema = await buildSchema({
      resolvers: [ArticleResolver],
      validate: false,
    });
    apolloServerHandler = new ApolloServer({ schema }).createHandler({
      path: '/api/graphql',
    });
  }
  return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};

export const config = { api: { bodyParser: false } };
