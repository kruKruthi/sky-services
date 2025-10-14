import { navItems } from "./mockdata.js";

export const resolvers = {
  Query: {
    HeaderMenus: () => { 
      return navItems;
    },
    HeaderMenu: (_, args) => {
      return navItems.find(menu => menu.id === parseInt(args.id));
    }
  }
};