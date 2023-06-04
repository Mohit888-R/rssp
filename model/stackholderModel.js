const mongoose = require('mongoose');


const stackHolderSchema = mongoose.Schema({
    country:{
        type:String,
    },
    state : {
        type:String,
    },
    city:{
        type:String,
    },
    district:{
        type:String,
    },
    policestation : {
        type:String,
    },
    hospital:{
        type:String,
    },
    pincode:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    password:{
        type:String,
    }
});


module.exports = new mongoose.model("Stackholder",stackHolderSchema);