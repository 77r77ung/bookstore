var express = require('express');
var router = express.Router();

const mypageController = require('../controllers/mypageController')

router.get('/main/:user_user_uid', mypageController.mypage);

router.post('/addReco/:user_uid', mypageController.addReco);
router.get('/addReco', mypageController.addRecoPage);

router.post('/addAdd/:user_user_uid', mypageController.addAdd);
router.get('/addAdd/', mypageController.addAddPage);

router.patch('/updateAdd/:address_number', mypageController.updateAdd);
router.get('/upadateAdd/', mypageController.updateAddPage);

router.delete('/deleteAdd/:user_user_uid', mypageController.deleteAdd);


router.post('/addCard/:user_user_uid', mypageController.addCard);
router.get('/addCard/', mypageController.addCardPage);

router.patch('/updateCard/:card_number', mypageController.updateCard);
router.get('/updateCard/', mypageController.updateCardPage);

router.delete('/deleteCard/:user_user_uid', mypageController.deleteCard);

module.exports = router;