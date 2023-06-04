const userModel = require('../model/userModel.js');
const raiseIssueModel =require('../model/userraiseIssueModel');

const raiseIssueReport = async(req,res)=>{
    const userUniqueId = req.headers.userUniqueId;
    try{
        const userId1 = await userModel.findOne({userUniqueId:userUniqueId});
       const userId2 = await raiseIssueModel.findOne({userUniqueId:userUniqueId});

        const raiseIssueReport = {
               userUniqueId:userUniqueId,
               name:userId1.name,
               mobileNumber:userId1.mobileNumber,
               address: [{street:userId1.street}, {country:userId1.country},{state:userId1.state},{city:userId1.city}],
               zipCode: userId1.pincode,
               report:userId2.report,
               reportaddress:userId2.address,
        }

        return res.status(200).json({success:true,raiseIssueReport})

    }catch(err){
        console.log(err);
    }   
}

module.exports = {raiseIssueReport}