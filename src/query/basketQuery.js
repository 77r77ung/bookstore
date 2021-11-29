exports.listBasket = 'select * from basket'

exports.addBasket = 'select * from basket where user_uid =?'

exports.updateBasket = 'update basket_list set basket_basket_number=?, book_book_number=?, basket_amount=? where basket_basket_number=?'