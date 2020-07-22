import gql from 'graphql-tag';

export const GET_ARTICLE_QUERY = gql`
  query GetArticles($link: String!) {
    getArticles(link: $link) {
      id
      title
      link
      img
      description
      content
      books {
        id
        cover
        link
      }
      subAreas {
        id
        title
        link
      }
      articles {
        id
        title
        link
      }
    }
  }
`;
