const mongoose = require('mongoose');
require('dotenv').config(); 

const connect =() => {
    console.log("database is connected to " + process.env.MONGO_URI);
    return mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true});
}

module.exports = {connect};