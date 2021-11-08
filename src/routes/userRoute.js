var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

// 회원가입
router.post('/signup', userController.signUp);

// 회원가입 페이지
router.get('/signup', userController.signUpPage);

// 로그인
router.post('/signin', userController.signIn);

// 로그인 페이지
router.get('/signin', userController.signInPage);

// 로그아웃
router.post('/logout', userController.logout);

// 책 메인
module.exports = router;