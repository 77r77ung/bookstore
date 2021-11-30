exports.itemDetail = 'select a.cart_cart_number, a.book_book_number, b.book_name, b.book_amount, b.book_price, b.book_explain from cart_list a, book b where a.book_book_number = b.book_number and a.cart_cart_number=?'

exports.cartDetail = 'select * from cart where user_user_uid=? order by cart_date'

exports.addCart = 'insert into cart(cart_number, cart_date, `user_user_uid`) values(?, ?, ?)'

exports.addItem = 'insert into cart_list(cart_cart_number, book_book_number) values(?, ?)'

exports.deleteItem = 'delete from cart_list where cart_cart_number=? and book_book_number=?'
exports.deleteItem2 = 'delete from cart_list where cart_cart_number=?'
exports.deleteCart = 'delete from cart where cart_number=?'