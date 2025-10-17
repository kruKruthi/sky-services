import HeaderModel from '../models/headers.js';
import gridContents from '../models/gridContents.js';

export const getAllHeaderContents = async () => {
  const menuList = await HeaderModel.find().lean();
  return menuList;
};

export const getHeaderById = async (id) => {
  // To handle object ids which are not valid
  // if (!isValidObjectId(id)) {
  //   return null;
  // }
  const product = await HeaderModel.findById(id).lean();
  return product;
};

export const getAllGridContents = async () => {
  const gridList = await gridContents.find().lean();
  return gridList;
}

export const createGridDetails = async (input) => {
  const newGridData = {
    title: input.title,
    subHeader: input.subHeader,
    description: input.description,
    images: input.images.map(img => ({
      url: img.url,
      altText: img.altText || ''
    }))
  };
  const newGrid = new gridContents(newGridData);
  const savedGrid = await newGrid.save();
  return savedGrid.toObject();
}