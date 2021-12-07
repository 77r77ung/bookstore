exports.listAdd = 'select * from address where user_user_uid=?'
exports.addAdd = 'insert into address(address_number, postal_code, default_address, optional_address, user_user_uid) values(?, ?, ?, ?, ?)'
exports.updateAdd = 'update address set postal_code=?, default_address=?, optional_address=? where address_number=?'
exports.detailAdd = 'select * from address where address_number=?'
exports.deleteAdd = 'delete from address where address_number=?'

exports.listCard = 'select * from card where user_user_uid=?'
exports.addCard = 'insert into card(card_number, card_type, expiry_date, user_user_uid) values(?, ?, ?, ?)'
exports.updateCard = 'update card set card_type=?, expiry_date=? where card_number=?'
exports.detailCard = 'select * from card where card_number=?'
exports.deleteCard = 'delete from card where card_number=?'


exports.listCoupon = 'select a.coupon_uid, a.coupon_name, a.coupon_discnt, b.coupon_coupon_uid, b.user_user_uid from coupon a, user_coupon b where a.coupon_uid = b.coupon_coupon_uid and b.user_user_uid=?'

/* 쿠폰 목록 불러오기 */
// exports.detailCoupon = 'select a.coupon_uid, a.coupon_discnt, a.coupon_name, b.coupon_coupon_uid, b.user_user_uid from coupon a, user_coupon b where a.coupon_uid = b.coupon_coupon_uid and b.user_user_uid=?'
