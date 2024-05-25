const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amit');
console.log("db connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({

    loginid:String,
    fullname:String,
    loginname:String,
    password:String,
    emailid:String,
    mobileno:String,
    address:String,
  

});

const User = new mongoose.model('User', userSchema);



const server = express();


server.use(cors());
server.use(bodyParser.json())

server.post('/Register/User', async (req, res) => {

    let user= new User()

    user.loginid=req.body.loginid;
    user.fullname=req.body.fullname;
    user.loginname=req.body.loginname;
    user.password=req.body.password;
    user.emailid=req.body.emailid;
    user. mobileno=req.body. mobileno;
    user.address=req.body.address;
    const doc=await user.save();


    console.log(doc)
    res.json(doc);

});
//////////////////////////////////////////////////////////////

server.post('/Login/User', async (req, res) => {
  const { loginid, password } = req.body;

  try {
    const user = await User.findOne({ loginid, password });

    if (user) {
      res.json({ message: 'Login Successful', user });
    } else {
      res.status(401).json({ message: 'Login Failed: Invalid credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
////////////////////////////////////////////////////////////////


server.get('/user/:loginid', async (req, res) => {
  const { loginid } = req.params;

  try {
    const user = await User.findOne({ loginid });

    if (user) {
      // Exclude the password from the response
      const { password, ...userData } = user.toObject();
      res.json(userData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
/////////////////////////////////////////////////////////////////

server.put('/user/:loginid', async (req, res) => {
  try {
    const loginid = req.params.loginid;
    const updatedUserData = req.body;

    // Find the existing User by login ID
    const existingUser = await User.findOne({ loginid });

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the fields with the new data
    existingUser.fullname = updatedUserData.fullname || existingUser.fullname;
    existingUser.loginname = updatedUserData.loginname || existingUser.loginname;
    existingUser.password = updatedUserData.password || existingUser.password;
    existingUser.emailid = updatedUserData.emailid || existingUser.emailid;
    existingUser.mobileno = updatedUserData.mobileno || existingUser.mobileno;
    existingUser.address = updatedUserData.address || existingUser.address;

    // Save the updated User to the database
    const updatedUser = await existingUser.save();

    res.status(200).json({ message: 'User details updated successfully', User: updatedUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });

  }
});




server.listen(8080, () => {
    console.log("Server started");
});