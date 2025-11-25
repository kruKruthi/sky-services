
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    HeaderMenus: [HeaderMenu!]
    HeaderMenu(id: ID!): HeaderMenu
    products: [Product!]
    product(id: ID!): Product
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

  type Product {
  id: ID!
  title: String!
  description: String!
  images: [Image!]!
  createdAt: String!
  updatedAt: String
}

  type Image {
    url: String!
    altText: String
  }

  input CreateProductImage {
    url: String!
    altText: String
  }

  input CreateProductInput {
    title: String!
    description: String
    images: [CreateProductImage!]!
  }

  input UpdateProductInput {
    id: ID!
    title: String!
    description: String
    images: [CreateProductImage!]!
  }

  type Mutation {
    createGridDetails(input: GridContentInput!): GridContent!
    createProduct(input: CreateProductInput!): Product
    deleteProduct(id: ID!): Product!
    updateProduct(input: UpdateProductInput!): Product!
  }
`;

