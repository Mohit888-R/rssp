const express = require('express');
const router = express.Router();
const {alert,alertDetail}  = require('../controller/useralertController');

router.post('/alert',alert);
router.get('/alert',alertDetail);


module.exports = router;

