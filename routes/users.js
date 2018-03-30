var express = require('express');
var router = express.Router();

var Users= require('../controllers/user');

// routes dealing with user collection

router.post('/signup',Users.signup);
router.get('/login',Users.login);

module.exports = router;
