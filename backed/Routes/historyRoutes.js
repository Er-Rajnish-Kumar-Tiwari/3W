const express = require('express');
const router = express.Router();
const historyController = require('../Controlls/historyController');

router.get('/', historyController.getRecentHistory);

module.exports = router;
