const express = require('express');
const connectToDB = require('./config/database'); // Ensure database connection is established
const app = express();
const User = require('./models/user');

app.post('/signup', async (req, res) => {
  const userObj = {
    firstName: 'Kruthika',
    email: 'kruthi@gmail.com',
    password: 'Kruthi@123',
    age: 22
  }
  const user = new User(userObj);
  await user.save().then(() => {
    res.status(201).send('User created successfully');
  }).catch((error) => {
    res.status(400).send('Error creating user: ' + error.message);
  });
});


connectToDB()
  .then(() => {
    console.log('Connected to batabase');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }).catch((error) => {
    console.error('Error connecting to database:', error);
  });