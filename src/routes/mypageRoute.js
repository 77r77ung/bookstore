var express = require('express');
var router = express.Router();

const mypageController = require('../controllers/mypageController')

//마이페이지
router.get('/main/:user_user_uid', mypageController.mypage);


// 주소지 추가
router.post('/addAdd/:user_user_uid', mypageController.addAdd);
router.get('/addAdd/', mypageController.addAddPage);

//주소 수정
router.patch('/updateAdd/:address_number', mypageController.updateAdd);
router.get('/upadateAdd/', mypageController.updateAddPage);

router.delete('/deleteAdd/:user_user_uid', mypageController.deleteAdd);


router.post('/addCard/:user_user_uid', mypageController.addCard);
router.get('/addCard/', mypageController.addCardPage);

router.patch('/updateCard/:card_number', mypageController.updateCard);
router.get('/updateCard/', mypageController.updateCardPage);

router.delete('/deleteCard/:user_user_uid', mypageController.deleteCard);

module.exports = router;