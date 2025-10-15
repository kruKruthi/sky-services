import HeaderModel from '../models/headers.js';

export const getAllProducts = async () => {
  const menuList = await HeaderModel.find().lean();
  return menuList;
};
