exports.addOrder = 'insert into orders (order_number, order_date, order_total, postal_code, default_address, optional_address, card_number, card_type, expiry_date, user_user_uid, coupon_discnt) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
exports.addOrderList = 'insert into orders_list(orders_order_number, book_book_number, order_amount) values(?, ?, ?)'

exports.minusOrderAmount = 'update book set book_amount = (book_amount - ?) where book_number =?'

exports.selectOrder = 'select * from orders where user_user_uid=? order by order_date'

exports.orderDetail = 'select * from orders where order_number=?'

exports.orderBookList = 'select a.orders_order_number, a.book_book_number, a.order_amount, b.book_number, b.book_name, b.book_amount, b.book_price, b.book_explain from orders_list a, book b where a.book_book_number = b.book_number and a.orders_order_number=?'

exports.selectOrderList = 'select * from orders_list where orders_order_number=?'

exports.plusOrder = 'update book set book_amount = (book_amount + ?) where book_number = ?'

exports.deleteOrderList = 'delete from orders_list where orders_order_number=? and book_book_number=?'
exports.deleteOrder = 'delete from orders where order_number=?'

/* 할인 */
// exports.updateCoupon = 'update orders set order_total = (order_total - coupon_discnt) where order_number=?'

/* 쿠폰 삭제 */
exports.deleteCoupon = 'delete from user_coupon where coupon_coupon_uid=?'

exports.getCoupon = 'select * from user_coupon where user_user_uid=?'