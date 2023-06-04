const StackholderModel = require('../model/stackholderModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { country, state, city, district, policestation, hospital, pincode, email, phoneno, password} = req.body;

    try {
        const oldUser = await StackholderModel.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const result = await StackholderModel.create({ country, state, city, district, policestation, hospital, pincode, email, phoneno, password:hashedPassword});

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });
        return res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message:error.message});
        console.log(error);
    }
}


const login = async (req, res) => {
    const { email,phoneno, password } = req.body;
    try {
      const oldUser = await StackholderModel.findOne({ email,phoneno });
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.SECRET, { expiresIn: "12h" });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };

module.exports = {register,login};