import { Schema, model } from "mongoose";

const imageSchema = new Schema({
  url: { type: String, required: true, trim: true},
  altText: { type: String, trim: true, default: ''}
});

const gridDetailsSchema = new Schema({
  title: { type: String, required: true },
  subHeader: { type: String, required: true },
  description: { type: String, required: true },
  images: [imageSchema],
});

const GeidModel = model('GridDetails', gridDetailsSchema);
export default GeidModel;