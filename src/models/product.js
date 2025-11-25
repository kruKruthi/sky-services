import { Schema, model } from 'mongoose';

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    altText: {
      type: String,
      trim: true,
      default: '',
    },
  }
);

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    images: [imageSchema],
  }
);

const ProductModel = model('Product', productSchema);
export default ProductModel;
