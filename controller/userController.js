const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const userModel = require('../model/userModel.js');



const register = async (req, res) => {

  // const passwordhash = await bcrypt.hash(password,8);
  try {
    const { userUniqueId, name, email, phoneno, password, country, state, city, street, pincode } = req.body;
    // const userExist = await userModel.findOne({email:email});
    // if(userExist){
    //     return res.status(422).json({error:"Email is already exist"});
    // }

    const user = userModel.create(userUniqueId, name, email, phoneno, password, country, state, city, street, pincode);
    res.status(201).json({ user, message: 'User register successfull' });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }

  // const { userUniqueId,name, email, phoneno, password, country, state, city, street, pincode } = req.body;
  // try {
  //     const userId = uuidv4()
  //     // const oldUser = await UserModel.findOne({ email });

  //     // if (oldUser) return res.status(400).json({ message: "User already exists" });

  //     // const hashedPassword = await bcrypt.hash(password, 12);

  //     const result = await UserModel.create({ userUniqueId:userId, name, email, phoneno, password, country, state, city, street, pincode });

  //     const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });
  //     return res.status(201).json({ result, token });
  // } catch (error) {
  //     res.status(500).json({ message:error.message});
  //     console.log(error);
  // }
}


const login = async (req, res) => {
  const { email, phoneno, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email, phoneno });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.SECRET, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, login };