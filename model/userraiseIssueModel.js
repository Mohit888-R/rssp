const mongoose = require('mongoose');

const raiseIssueSchema = mongoose.Schema({
    userUniqueId:{
        type: 'string',
    },
    stackholder:{
        type:String,
    },
    policeStation:{
        type:String,
    },
    hospital:{
        type:String,
    },
    report:{
        type:String,
    },
    address:{
        type:String,
    },
    date:{
        type:String,
    },
    time:{
        type:String
    }
})

module.exports = new mongoose.model("raiseIssue",raiseIssueSchema)