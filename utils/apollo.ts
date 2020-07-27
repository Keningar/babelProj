import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

// function createIsomorphLink(context: ResolverContext = {}) {
//   if (typeof window === 'undefined') {
//     const { SchemaLink } = require('apollo-link-schema');
//     const { schema } = require('@graphql_p/schema');
//     return new SchemaLink({ schema, context });
//   } else {
//     const { HttpLink } = require('apollo-link-http');
//     return new HttpLink({
//       uri: '/api/graphql',
//       credentials: 'same-origin',
//     });
//   }
// }

function createIsomorphLink(context: ResolverContext = {}) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('apollo-link-schema');
    //TODO find out about the problem with 'chokidar' and 'child_process' that was corrected by importing these librarys here ⮧
    const { buildSchemaSync } = require('type-graphql');
    const ArticleResolver = require('@graphql_p/resolvers/articlesResolvers');
    //TODO See if this no will be a potencial perform problem
    const schema = buildSchemaSync({
      resolvers: [ArticleResolver],
      validate: false,
    });
    return new SchemaLink({ schema, context });
  } else {
    const { HttpLink } = require('apollo-link-http');
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });
  }
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context);
  console.log('initializeApollo was executed');

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  console.log('Apollo Client Reused');
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
