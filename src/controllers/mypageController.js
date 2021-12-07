const mypageService = require('../services/mypageService');

exports.mypage = async(req, res) => {
    const { user_user_uid } = req.params

    try{
        let add_info = await mypageService.listAdd(user_user_uid)
        let card_info = await mypageService.listCard(user_user_uid)
        let coupon_info = await mypageService.listCoupon(user_user_uid)
        let session = req.session.user_uid
        return res.render('main', { 
            page: './mypage/mypage',
            session: session, 
            add_info: add_info,
            card_info: card_info,
            coupon_info:coupon_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}


exports.addAdd = async (req, res) => {
    const { postal_code, default_address, optional_address } = req.body
    const { user_user_uid } = req.params

    try{
        const address_number = String(Math.random()*100000000)
        await mypageService.addAdd(address_number, postal_code, default_address, optional_address, user_user_uid)
        return res.redirect('/mypage/main/'+user_user_uid)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.addAddPage = async (req, res) => {
    try{
        const session = req.session.user_uid
        return res.render('main', {page:'./mypage/addAdd', session:session})
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateAdd = async (req, res) => {
    const { postal_code, default_address, optional_address } = req.body
    const { address_number } = req.params
    try{
        await mypageService.updateAdd(postal_code, default_address, optional_address, address_number)
        return res.redirect('/mypage/main/' + req.session.user_uid)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateAddPage = async (req, res) => {
    const { address_number } = req.params
    try{
        let add_info = await mypageService.detailAdd(address_number)
        let session = req.session.user_uid
        return res.render('main', {
            page:'./mypage/updateAdd', 
            session: session , 
            add_info: add_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.deleteAdd = async (req, res) => {
    const { address_number } = req.params
    try{
        await mypageService.deleteAdd(address_number)
        return res.redirect('/mypage/main/' + req.session.user_uid)
    }catch(err){
    return res.status(500).json(err)
    }
}

exports.addCard = async (req, res) => {
    const { card_number, card_type, expiry_date } = req.body
    const { user_user_uid } = req.params
    try{
        await mypageService.addCard(card_number, card_type, expiry_date, user_user_uid)
        return res.redirect('/mypage/main/'+user_user_uid)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.addCardPage = async (req, res) => {
    try{
        let session = req.session.user_uid
        return res.render('main', {page:'./mypage/addCard', session:session})
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateCard = async (req, res) => {
    const { card_type, expiry_date } = req.body
    const { card_number } = req.params
    try{
        await mypageService.updateCard(card_type, expiry_date, card_number)
        return res.redirect('/mypage/main/'+req.session.user_uid)
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateCardPage = async (req, res) => {
    const { card_number } = req.params
    try{
        let card_info = await mypageService.detailCard(card_number)
        let session = req.session.user_uid
        return res.render('main', {
            page:'./mypage/updateCard', 
            session:session, 
            card_info:card_info})
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.deleteCard = async (req, res) => {
    const { card_number } = req.params
    try{
        await mypageService.deleteCard(card_number)
        return res.redirect('/mypage/main/'+req.session.user_uid)
    }catch(err){
        return res.status(500).json(err)
    }
}