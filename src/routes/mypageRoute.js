var express = require('express');
var router = express.Router();

const mypageController = require('../controllers/mypageController')

router.get('/main/:user_id', mypageController.mypage);

router.post('/addAdd/:user_id', mypageController.addAdd);
router.get('/addAddPage/', mypageController.addAddPage);

router.patch('/main/:address_number', mypageController.updateAdd);
router.get('/upadateAdd/', mypageController.updateAddPage);

router.delete('/deleteAdd/:user_id', mypageController.deleteAdd);


router.post('/addCard/:user_id', mypageController.addCard);
router.get('/addCardPage/', mypageController.addCardPage);

router.patch('/main/:card_number', mypageController.updateCard);
router.get('/updateCardPage/', mypageController.updateCardPage);

router.delete('/deleteCard/:user_id', mypageController.deleteCard);

module.exports = router;