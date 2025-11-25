import { navItems } from "./mockdata.js";
import { GraphQLError } from 'graphql';
import { getAllHeaderContents, createGridDetails, getHeaderById } from "../service/headerMenu.js";
import { createProduct, getAllProducts } from "../service/product.js";

export const resolvers = {
  Query: {
    HeaderMenus: () => { 
      return getAllHeaderContents();
    },
    // Connect to mock file to get data
    // HeaderMenu: (_, args) => {
    //   return navItems.find(menu => menu.id === parseInt(args.id));
    // },
    HeaderMenu: async (_parent, { id }) => {
      const headerContent = await getHeaderById(id);
      if (!headerContent) {
        throw new GraphQLError('Product not found', { extensions: { code: 'NOT_FOUND' } });
      }
      return headerContent;
    },
    products: () => getAllProducts(),
    product: async (_parent, { id }) => {
      const product = await getProductById(id);
      if (!product) {
        throw new GraphQLError('Product not found', { extensions: { code: 'NOT_FOUND' } });
      }
      return product;
    },
  },
  Mutation: {
    createGridDetails: async (_parent, { input }) => {
      return await createGridDetails(input);
    },
    createProduct: async (_parent, { input }) => {
      try {
        return await createProduct(input);
      } catch (error) {
        throw badRequestError(error.message ?? 'Invalid Product Details');
      }
    },
    deleteProduct: async (_parent, { id }) => {
      const deletedProduct = await deleteProduct(id);
      if (!deletedProduct) {
        throw notFoundError('Product not found with id ' + id);
      }
      return deletedProduct;
    },
    updateProduct: async (_parent, { input: { id, title, description, images } }) => {
      const updatedProduct = await updateProduct(id, { title, description, images });
      if (!updatedProduct) {
        throw notFoundError('Product not found with id ' + id);
      }
      return updatedProduct;
    },
  },
  Product: {
    id: (product) => product._id.toString(),
    createdAt: (produdt) => formatISODate(produdt.createdAt),
    updatedAt: (product) => formatISODate(product.updatedAt),
  },
};

function formatISODate(date) {
  return date.toISOString().split('T')[0];
}

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: {
      code: 'NOT_FOUND',
    },
  });
}
function badRequestError(message) {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_REQUEST',
    },
  });
}