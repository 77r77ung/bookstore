var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController');

router.post('/order', orderController.order);

router.get('/orderPage/:book_number', orderController.orderPage);

router.get('/orderListPage', orderController.orderListPage);

router.get('/orderDetailPage/:order_number', orderController.orderDetailPage);

router.get('/deleteOrder/:order_number', orderController.deleteOrder);

module.exports = router;