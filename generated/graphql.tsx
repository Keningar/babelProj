import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddArticleInput = {
  articles?: Maybe<Scalars['String']>;
  books?: Maybe<Array<AddBook>>;
  content?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  subareas?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AddBook = {
  cover?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  title: Scalars['String'];
};

export type Article = {
  __typename?: 'Article';
  articles?: Maybe<Scalars['String']>;
  books: Array<Maybe<Book>>;
  content?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  subareas?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  cover?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticle: Article;
};


export type MutationAddArticleArgs = {
  data: AddArticleInput;
};

export type Query = {
  __typename?: 'Query';
  getArticle: Array<Article>;
  getArticles: Array<Article>;
};


export type QueryGetArticleArgs = {
  link: Scalars['String'];
};

export type ExmpQueryVariables = Exact<{ [key: string]: never; }>;


export type ExmpQuery = (
  { __typename?: 'Query' }
  & { getArticles: Array<(
    { __typename?: 'Article' }
    & Pick<Article, 'description'>
  )> }
);


export const ExmpDocument = gql`
    query Exmp {
  getArticles {
    description
  }
}
    `;

/**
 * __useExmpQuery__
 *
 * To run a query within a React component, call `useExmpQuery` and pass it any options that fit your needs.
 * When your component renders, `useExmpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExmpQuery({
 *   variables: {
 *   },
 * });
 */
export function useExmpQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExmpQuery, ExmpQueryVariables>) {
        return ApolloReactHooks.useQuery<ExmpQuery, ExmpQueryVariables>(ExmpDocument, baseOptions);
      }
export function useExmpLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExmpQuery, ExmpQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExmpQuery, ExmpQueryVariables>(ExmpDocument, baseOptions);
        }
export type ExmpQueryHookResult = ReturnType<typeof useExmpQuery>;
export type ExmpLazyQueryHookResult = ReturnType<typeof useExmpLazyQuery>;
export type ExmpQueryResult = ApolloReactCommon.QueryResult<ExmpQuery, ExmpQueryVariables>;