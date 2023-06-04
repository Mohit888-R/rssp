const express = require('express');
const router = express.Router();
const {alertReport} = require('../controller/stackholderalertController');

router.post('/alertReport',alertReport);

module.exports = router;