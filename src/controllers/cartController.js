const cartService = require('../services/cartService')
const mypageService= require('../services/mypageService')

exports.cartOrder = async (req, res) => {

    const { cart_number } = req.params

    try {
        let session = req.session.user_uid
        let book_info = await cartService.itemDetail(cart_number)
        let card_info = await mypageService.listCard(session)
        let add_info = await mypageService.listAdd(session)
        await cartService.deleteItem2(cart_number)
        await cartService.deleteCart(cart_number)
        
        return res.render('main', {
            page:'./order/order',
            session:session,
            book_info:book_info,
            card_info:card_info,
            add_info:add_info
        })
    }

    catch(error) {
        console.log(error)
    }

}

exports.cartPage = async (req, res) => {
    
    try{
        let session = req.session.user_uid
        let cart_info = await cartService.cartDetail(session)
        console.log(cart_info)
        let cart = cart_info[0]
        let cart_number = cart.cart_number

        let item_info = await cartService.itemDetail(cart_number)

        return res.render('main', {
            page:'./cart/cart',
            session:session,
            cart_info:cart_info,
            item_info:item_info
         })
    }

    catch (error) {
        console.log(error)
    }

}

exports.addItem = async (req, res) => {
    
    const { book_number } = req.params

    try{
        let session = req.session.user_uid

        let cartDetail_info = await cartService.cartDetail(session)

        if(cartDetail_info.length == 0){
            let cart_number = String(Math.random()*100000000000000000)
            let cart_date = new Date()
            await cartService.addCart(cart_number, cart_date, session)
            await cartService.addItem(cart_number, book_number)
        } else {
            let cartDetail = cartDetail_info[0]
            let cart_number = cartDetail.cart_number

            await cartService.addItem(cart_number, book_number)
        }

        return res.send(`<script type="text/javascript">
                alert("장바구니에 추가되었습니다."); 
                location.href='/cart/cartPage';
                </script>`);
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.deleteItem = async (req, res) => {
    
    const { book_number } = req.params

    try{
        let session = req.session.user_uid

        let cartDetail_info = await cartService.cartDetail(session)
        let cartDetail = cartDetail_info[0]
        let cart_number = cartDetail.cart_number

        await cartService.deleteItem(cart_number, book_number)

        return res.redirect('/cart/cartPage/')
    }

    catch (error) {
        return res.status(500).json(error)
    }

}