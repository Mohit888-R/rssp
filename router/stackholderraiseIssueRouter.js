const express = require('express');
const router = express.Router();
const {raiseIssueReport} = require('../controller/stackholderaiseIssueController');

router.post('/raiseIssueReport',raiseIssueReport);

module.exports = router;