const userModel = require('../model/userModel');
const alert = require("../model/useralertModel");


const alertReport = async (req,res)=>{
    const userUniqueId = req.headers.userUniqueId;

    try{
        const userId1 =  userModel.findOne({userUniqueId:userUniqueId});
        const userId2 =  alert.findOne({userUniqueId:userUniqueId});
        console.log(userId1);
        console.log(userId1);
        const alertReportData = {
            userUniqueId:userUniqueId,
            reason:userId2.reason,
            location:'',
            isHospital:false,
            image:'',
            name:userId1.name,
            mobileNumber:userId1.mobileNumber || "" ,
            address: [{street:userId1.street}, {country:userId1.country},{state:userId1.state},{city:userId1.city}] || "",
            zipCode: userId1.pincode || "",
        }

        return res.status(200).json({  success:true, alertReportData})
    }catch(err){
        console.log(err);
    }
}

module.exports = {alertReport}