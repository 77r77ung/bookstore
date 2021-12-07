const orderService = require('../services/orderService')
const bookService = require('../services/bookService')
const mypageService = require('../services/mypageService')

exports.order = async (req, res) => {
    const { book_price, card_number, address_number } = req.body
    const { book_book_number, order_amount } = req.body
    // const { coupon_coupon_uid } = req.body

    try{
        let user_user_uid = req.session.user_uid
        let order_number = String(Math.random()*100000000000000000)
        let order_date = new Date()

        let price = parseInt(book_price)
        let amount = parseInt(order_amount)
        console.log(price)
        console.log(amount)

        let order_total = 0
        order_total = order_total + price*amount

        /*
        if (book_book_number.length>1){
            for (var i = 0; i < book_book_number.length; i++){
                let price = book_price[i]
                let amount = ParseInt(book_amount[i])
                console.log(typeof(price))
                console.log(typeof(amount))
                order_total = order_total + price*amount
            }
        }else{
            order_total = book_price*book_amount
            console.log(typeof(book_price))
            console.log(typeof(book_amount))
        }
        */

        let card_info = await mypageService.detailCard(card_number)
        let add_info = await mypageService.detailAdd(address_number)
        let coupon_info = await mypageService.listCoupon(user_user_uid)
        // let getCoupon = await orderService.getCoupon(user_user_uid)
        

        let card = card_info[0]
        let add = add_info[0]
        let coupon = coupon_info[0]
        console.log(coupon_info)
        
        let expiry_date = card.expiry_date
        let card_type = card.card_type

        let postal_code = add.postal_code
        let default_address = add.default_address
        let optional_address = add.optional_address
        
        let coupon_discnt = parseInt(coupon.coupon_discnt)
        console.log(coupon_discnt)

        order_total = order_total - coupon_discnt
        console.log(isNaN(coupon_discnt))
        console.log(isNaN(order_total))
        console.log(order_total)

        // await orderService.updateCoupon(order_total, coupon_discnt, order_number)

        await orderService.addOrder(order_number, order_date, order_total, postal_code, default_address, optional_address, card_number, card_type, expiry_date, user_user_uid, coupon_discnt)

        for(var i = 0; i < book_book_number.length; i++){
            let book_number = book_book_number[i]
            let amount = order_amount[i]
            await orderService.addOrderList(order_number, book_number, amount)
            await orderService.minusOrderAmount(amount, book_number)
            await orderService.deleteCoupon(coupon_coupon_uid)
        }

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
        let coupon_info = await orderService.getCoupon(session)
        console.log(coupon_info);

        return res.render('main', {
            page:'./order/order',
            session:session,
            book_info:book_info,
            card_info:card_info,
            add_info:add_info,
            coupon_info:coupon_info
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