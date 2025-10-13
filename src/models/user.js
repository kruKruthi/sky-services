const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String },
});

const User = mongoose.model('User', userDetailsSchema);

module.exports = User;