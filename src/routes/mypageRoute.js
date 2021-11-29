var express = require('express');
var router = express.Router();

const mypageController = require('../controllers/mypageController')

//마이페이지
router.get('/main/:user_user_uid', mypageController.mypage);

//주소 추가
router.post('/addAdd/:user_user_uid', mypageController.addAdd);
router.get('/addAdd/', mypageController.addAddPage);

//주소 수정
router.patch('/updateAdd/:address_number', mypageController.updateAdd);
router.get('/updateAdd/:address_number', mypageController.updateAddPage);

//주소 삭제
router.delete('/deleteAdd/:address_number', mypageController.deleteAdd);

//카드 추가
router.post('/addCard/:user_user_uid', mypageController.addCard);
router.get('/addCard/', mypageController.addCardPage);

//카드 수정
router.patch('/updateCard/:card_number', mypageController.updateCard);
router.get('/updateCard/:card_number', mypageController.updateCardPage);

//카드 삭제
router.delete('/deleteCard/:card_number', mypageController.deleteCard);

module.exports = router;