import { gql } from 'mercurius-codegen';

export const schema = gql`
  scalar DateTime

  type Query {
    books: [Book!]!
  }

  type Book {
    id: String!
    description: String
    author: String
    publishedAt: DateTime!
  }
`;
