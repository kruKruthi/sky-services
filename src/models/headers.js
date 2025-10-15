import { Schema, model } from 'mongoose';

const headerDetailsSchema = new Schema({
  label: { type: String, required: true },
  link: { type: String, required: true },
  submenus: [
    {
      label : { type: String, required: true },
      link : { type: String, required: true }
    }
  ]
});

const HeaderModel = model('HeaderMenu', headerDetailsSchema);
export default HeaderModel;