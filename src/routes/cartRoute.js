var express = require('express');
var router = express.Router();

const cartController = require('../controllers/cartController')

/* 항목 담기 */
router.get('/addItem/:book_number', cartController.addItem);

/* 항목 삭제 */
router.get('/deleteItem/:book_number', cartController.deleteItem);

/* 장바구니 페이지 */
router.get('/cartPage', cartController.cartPage);

/* 장바구니 주문 */
router.get('/cartOrder/:cart_number', cartController.cartOrder);

module.exports = router;