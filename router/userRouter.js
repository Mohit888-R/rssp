const express = require('express');
const router = express.Router();
const {register,login}  = require('../controller/userController');

router.post('/register',register);
router.post('/login',login);
// router.put('/user/:id',);
// router.delete('/user/:id',);




module.exports = router;

