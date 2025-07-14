const express = require('express');
const router = express.Router();
const userController = require('../Controlls/userController');

router.get('/', userController.getUsersByCategory);
router.post('/', userController.addUser);
router.post('/claim', userController.claimPoints);

module.exports = router;
