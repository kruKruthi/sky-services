
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
`;

