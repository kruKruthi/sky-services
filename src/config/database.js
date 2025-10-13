const mongoose = require('mongoose');

const connectToDB = async () => {
  await mongoose.connect('mongodb+srv://kruthi293_db_user:Sanjana%4015@skydatabase.obgzyoc.mongodb.net/SkyProject');
};

module.exports = connectToDB;
