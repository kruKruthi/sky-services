
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    HeaderMenus: [HeaderMenu!]
    HeaderMenu(id: ID!): HeaderMenu
  }

  type HeaderMenu {
    id: ID!
    label: String!
    link: String!
    submenus: [SubMenu]
  }

  type SubMenu {
    id: ID!
    label: String!
    link: String!
  }

  type GridContent {
    id: ID!
    title: String!
    subHeader: String!
    description: String!
    images: [Image]
  }

  type Image {
    url: String!
    altText: String
  }

  input ImageInput {
    url: String!
    altText: String
  }

  input GridContentInput {
    title: String!
    subHeader: String!
    description: String!
    images: [ImageInput!]!
  }

  type Mutation {
    createGridDetails(input: GridContentInput!): GridContent!
  }
`;

