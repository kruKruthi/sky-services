import { navItems } from "./mockdata.js";
import { getAllProducts } from "../service/headerMenu.js";

export const resolvers = {
  Query: {
    HeaderMenus: () => { 
      return getAllProducts();
    },
    HeaderMenu: (_, args) => {
      return navItems.find(menu => menu.id === parseInt(args.id));
    }
  }
};