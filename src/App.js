const express = require('express');
const connectToDB = require('./config/database'); // Ensure database connection is established
const app = express();
const User = require('./models/user');

app.use(express.json());

app.post('/signup', async (req, res) => {
  const user = new User(req.body);
  await user.save().then(() => {
    res.status(201).send('User created successfully');
  }).catch((error) => {
    res.status(400).send('Error creating user: ' + error.message);
  });
});

// Get user by email
app.get('/users-by-email', async (req, res) => {
  try {
    const userEmail = await User.find({email: req.body.email});
    if (userEmail.length === 0) {
      return res.status(404).send('No users found with the specified email');
    }
    else { 
      return res.status(200).json(userEmail);
    }
  } catch (error) {
   res.status(500).json("Server error: " + error.message);
  }
});

// Get all users
app.get('/users-all', async (req, res) => {
  try {
    const userEmail = await User.find({});
    if (userEmail.length === 0) {
      return res.status(404).send('No users found with the specified email');
    }
    else { 
      return res.status(200).json(userEmail);
    }
  } catch (error) {
   res.status(500).json("Server error: " + error.message);
  }
});

// Delete user by ID
app.delete('/users-delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    return res.send("Deleted successfully");
  } catch (error) {
   res.status(500).json("Server error: " + error.message);
  }
});

// update user by ID
app.put('/users-update/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).send("Updated successfully");
  } catch (error) {
   res.status(500).json("Server error: " + error.message);
  }
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