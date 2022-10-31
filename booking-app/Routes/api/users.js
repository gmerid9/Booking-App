const express = require('express');
const router = express.Router();
const usersCtrl = require('../../Controllers/api/users');


router.post('/' ,usersCtrl.create);
router.post('/logins',usersCtrl.login)

module.exports = router; 