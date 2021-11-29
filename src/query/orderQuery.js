exports.addOrder = "insert into `order` (`order_number`, `order_date`, `order_total`, `postal_code`, `default_address`, `optional_address`, `card_number`, `card_type`, `expiry_date`, `user_user_uid`) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
exports.addOrderList = 'insert into order_list(order_order_number, book_book_number, order_amount) values(?, ?, ?)'

exports.minusOrderAmount = 'update book set book_amount = (book_amount - ?) where book_number =?'

exports.selectOrder = 'select * from `order` where `user_user_uid=?` `order` by `order_date`'

exports.orderDetail = 'select * from order where order_unmber=?'

exports.orderBookList = 'select a.order_order_number, a.book_book_number, a.order_amount, b.book_number, b.book_name, b.book_amount, b.book_price, b.book_explain from order_list a, book b where a.book_book_number = b.book_number and a.order_order_number?'

exports.selectOrderList = 'select * from order_list where order_order_number=?'

exports.plusOrder = 'update book set book_amount = (book_amount + ?) where book_number = ?'

exports.deleteOrderList = 'delete from order_list where order_order_number=? and book_book_number=?'
exports.deleteOrder = 'delete from order where order_number=?'

