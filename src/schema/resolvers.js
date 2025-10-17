import { navItems } from "./mockdata.js";
import { getAllHeaderContents, createGridDetails, getHeaderById } from "../service/headerMenu.js";

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
  },
  Mutation: {
    createGridDetails: async (_parent, { input }) => {
      return await createGridDetails(input);
    },
  }
};

function badRequestError(message) {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_REQUEST',
    },
  });
}