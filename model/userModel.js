const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userUniqueId:{
        type: 'string',
    },
    name:{
        type:String,
    },
    email : {
        type:String,
    },
    phoneno:{
        type:String,
    },
    password:{
        type:String,
    },
    country : {
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    street:{
        type:String,
        default:""
    },
    pincode:{
        type:String,
        default:""
    }
});


module.exports = new mongoose.model("User",userSchema);