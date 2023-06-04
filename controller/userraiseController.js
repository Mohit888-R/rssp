const raiseIssueModel = require('../model/userraiseIssueModel');
const date1 = require('date-and-time')
const userModel = require('../model/userModel');

const raiseIssue = async (req, res) => {
    const { userUniqueId,stackholder, policeStation, hospital, report, address, date, time } = req.body;
    const userId = req.headers.useruniqueid;
    try {
        const userid = userModel.findOne({ userUniqueId: userId });
        console.log("userUniqueId : ",userId);
        if (userid) {
            const now = new Date();
            const value1 = date1.format(now, 'YYYY/MM/DD');
            const value2 = date1.format(now, 'HH:mm:ss');
            const raiseIssueData = await raiseIssueModel.create({ userUniqueId:userId,stackholder, policeStation, hospital, report, address, date: value1, time: value2 });
            return res.status(201).json({ success: true, raiseIssueData })
        }
    } catch (err) {
        console.log(err);
    }
}

const raiseIssueDetail = async (req, res) => {
    try {
        const raiseIssueData = await raiseIssueModel.find();
        return res.status(201).json({ success: true, raiseIssueData });
    } catch (err) {
        console.log(err);
    }
}


module.exports = { raiseIssue, raiseIssueDetail };