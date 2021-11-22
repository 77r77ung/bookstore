var express = require('express');
var router = express.Router();

const bookController = require('../controllers/bookController');

// 책 정보
router.get('/', bookController.listBook);

module.exports = router;