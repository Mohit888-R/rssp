const mongoose = require('mongoose');

const alertSchmea = mongoose.Schema({
    userUniqueId:{
        type: 'string',
    },
    country:{
        type:String,
        default:"India"
    },
    state:{
        type:String,
        default:'Rajasthan'
    },
    disrict:{
        type:String,
    },
    reason:{
        type:String,
    },
    policestation:{
        type:String,
    },
    hospital:{
        type:String,
    },
    date:{
        type:String,
    },
    time:{
        type:String
    }
})

module.exports = new mongoose.model("alert",alertSchmea);