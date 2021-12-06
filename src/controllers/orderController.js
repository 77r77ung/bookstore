const orderService = require('../services/orderService')
const bookService = require('../services/bookService')
const mypageService = require('../services/mypageService')

exports.order = async (req, res) => {
    const { book_price, card_number, address_number } = req.body
    const { book_book_number, order_amount } = req.body

    try{
        let user_user_uid = req.session.user_uid
        let order_number = String(Math.random()*100000000000000000)
        let order_date = new Date()

        let order_total = book_price * order_amount

        let card_info = await mypageService.detailCard(card_number)
        let add_info = await mypageService.detailAdd(address_number)

        let card = card_info[0]
        let add = add_info[0]

        let expiry_date = card.expiry_date
        let card_type = card.card_type

        let postal_code = add.postal_code
        let default_address = add.default_address
        let optional_address = add.optional_address

        await orderService.addOrder(order_number, order_date, order_total, postal_code, default_address, optional_address, card_number, card_type, expiry_date, user_user_uid)
        console.log(book_book_number)
        console.log(order_amount)
        await orderService.addOrderList(order_number, book_book_number, order_amount)
        await orderService.minusOrderAmount(order_amount, book_book_number)

        return res.send(`<script type="text/javascript">
        alert("주문이 완료되었습니다."); 
        location.href='./orderListPage';
        </script>`);
    }catch(err){
        console.log(err)
    }
}

exports.orderPage = async (req, res) => {
    const { book_number } = req.params

    try{
        let session = req.session.user_uid
        let book_info = await bookService.detailBook(book_number)
        let card_info = await mypageService.listCard(session)
        let add_info = await mypageService.listAdd(session)

        return res.render('main', {
            page:'./order/order',
            session:session,
            book_info:book_info,
            card_info:card_info,
            add_info:add_info
        })
    }catch(err){
        console.log(err)
    }
}

exports.orderListPage = async (req, res) => {
    try{
        let session = req.session.user_uid
        let order_info = await orderService.selectOrder(session)
        return res.render('main', {
            page:'./order/orderList',
            session:session,
            order_info:order_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.orderDetailPage = async (req, res) => {
    const { order_number } = req.params
    
    try{
        let session = req.session.user_uid
        let order_info = await orderService.orderDetail(order_number)
        let bookList_info = await orderService.orderBookList(order_number)

        return res.render('main', {
            page: './order/orderDetail',
            session:session,
            order_info:order_info,
            bookList_info:bookList_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.deleteOrder = async (req, res) => {
    const { order_number } = req.params

    try{
        let orderList_info = await this.orderService.selectOrderList(order_number)

        for(var i = 0; i<orderList_info.length; i++){
            let order_amount = orderList_info[i].order_amount
            let book_book_number = orderList_info[i].book_book_number

            await orderService.plusOrder(order_amount, book_book_number)
            await orderService.deleteOrderList(order_number, book_book_number)
        }

        await orderService.deleteOrder(order_number)

        return res.redirect('/order/orderListPage/')
    }catch(err){
        return res.status(500).json(err)
    }
}