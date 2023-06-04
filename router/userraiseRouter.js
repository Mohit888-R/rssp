const express = require('express');
const router = express.Router();
const {raiseIssue,raiseIssueDetail}  = require('../controller/userraiseController');

router.post('/raiseIssue',raiseIssue);
router.get('/raiseIssue',raiseIssueDetail);

module.exports = router;

