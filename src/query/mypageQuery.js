exports.listAdd = 'select * from address where user_user_uid=?'
exports.addAdd = 'insert into address(address_number, postal_code, default_address, optional_address, user_user_uid) values(?, ?, ?, ?, ?)'
exports.updateAdd = 'update address set postal_code=?, default_addressr=?, optional_address=? where address_number=?'
exports.detailAdd = 'select * from address where address_number=?'
exports.deleteAdd = 'delete from address where address_number=?'

exports.listCard = 'select * from card where user_user_uid=?'
exports.addCard = 'insert into card(card_number, card_type, expiry_date, user_user_uid) values(?, ?, ?, ?)'
exports.updateCard = 'update card set card_type=?, expiry_date=? where card_number=?'
exports.detailCard = 'select * from card where card_number=?'
exports.deleteCard = 'delete from card where card_number=?'

exports.addReco = 'insert into user(user_reco, user_uid) values(?)'
exports.upadatePoint = 'update user set point = (point + 10000) where user_uid = ?'