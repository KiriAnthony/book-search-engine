import { gql } from '@apollo/client';
// new page

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      books {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
