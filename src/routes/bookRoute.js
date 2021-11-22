var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

/* 도서 추가 */
router.post('/addBook', bookController.addBook);

/* 도서 수정 */
router.patch('/updateBook/:book_number', bookController.updateBook);


/* 도서 삭제 */
router.delete('/deleteBook/:book_number', bookController.deleteBook);

/* 도서 리스트 보기*/
router.get('/listbook/:book_number', bookController.listBook);

/* 도서 상세보기 */
router.get('/detailbook/:book_number', bookController.detailBook);

module.exports = router;