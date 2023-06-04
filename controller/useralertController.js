const AlertModel = require('../model/useralertModel.js');
const userModel = require('../model/userModel');
const date1 = require('date-and-time')

const alert = async (req, res) => {
    const { userUniqueId, country, state, disrict, reason, policestation, hospital, date, time } = req.body;
    const userId = req.headers.useruniqueid;
    try {
        const userid = userModel.findOne({ userUniqueId:userId });

        const now = new Date();
        const value1 = date1.format(now, 'YYYY/MM/DD');
        const value2 = date1.format(now, 'HH:mm:ss');
        if (userid) {
            const alertData = await AlertModel.create({ userUniqueId: userId, country, state, disrict, reason, policestation, hospital, date: value1, time: value2 });
        return res.status(201).json({ success: true, alertData })
        }
    } catch (err) {
        console.log(err);
    }
}



const alertDetail = async (req, res) => {
    try {
        const alertData = await AlertModel.find();
        return res.status(201).json({ success: true, alertData });
    } catch (err) {
        console.log(err);
    }
}



module.exports = { alert, alertDetail };