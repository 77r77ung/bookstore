// 메인 페이지
// exports.main = 'select book_number, book_name, book_amount, book_price from book';

// 책 추가
exports.addBook = 'insert into book (book_number, book_name, book_amount, book_price) values(?, ?, ?, ?)';

// 책 수정
exports.updateBook = 'update book set book_name=?, book_amount=?, book_price=? where book_number';

// 책 삭제
exports.deleteBook = 'delete from book where book_number=?';

// 책 리스트
exports.listBook = 'select * from book'

// 상세 정보
exports.detailBook = 'select * from book where book_number=?';