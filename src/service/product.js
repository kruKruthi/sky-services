import ProductModel from '../models/product.js';
import { isValidObjectId } from 'mongoose';

export const getAllProducts = async () => {
  const products = await ProductModel.find().lean();
  return products;
};

export const getProductById = async (id) => {
  // To handle object ids which are not valid
  if (!isValidObjectId(id)) {
    return null;
  }
  const product = await ProductModel.findById(id).lean();
  return product;
};

export const createProduct = async (input) => {
  const newProductData = {
    title: input.title,
    description: input.description,
    images: input.images.map(img => ({
      url: img.url,
      altText: img.altText || ''
    }))
  };
  const newProduct = new ProductModel(newProductData);
  const savedProduct = await newProduct.save();
  return savedProduct.toObject();
};

export const deleteProduct = async (id) => {
  // To handle object ids which are not valid
  if (!isValidObjectId(id)) {
    return null;
  }
  return await ProductModel.findByIdAndDelete(id).lean();
};

export const updateProduct = async (id, updateData) => {
  // To handle object ids which are not valid
  if (!isValidObjectId(id)) {
    return null;
  }
  return await ProductModel.findByIdAndUpdate(id, updateData, { runValidators: true, new: true });
};
