const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');

router.get('/', authorController.list);

module.exports = router;