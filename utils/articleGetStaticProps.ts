import { GetServerSideProps } from 'next';
import { initializeApollo } from '@utils_p/apollo';
import { GET_ARTICLE_QUERY } from '@graphql_p/querys/viewer';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ARTICLE_QUERY,
    variables: {
      link: params.title,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
