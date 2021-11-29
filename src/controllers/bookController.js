var bookServices = require('../services/bookService');
const pool = require("../../database/book_db");

exports.addBook = async(req, res) => {
    const {book_name, book_amount, book_price} = req.body;
    const {book_number} = req.params;
    try{
        await bookServices.addBook(book_name, book_amount, book_price);
        return res.redirect('/');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateBook = async(req, res) => {
    let {book_name, book_amount, book_price, book_explain} = req.body;
    let {book_number} = req.params;
    try{
        await bookServices.updateBook(book_name, book_amount, book_price, book_number, book_explain)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.deleteBook = async (req, res) => {
    let {book_number} = req.params
    try{
        await bookServices.deleteBook(book_number)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listBook = async (req, res) => {
    try{
        let book_info = await bookServices.listBook();
        let session = req.session.user_uid;
        let user_name = req.session.user_name;
        console.log(user_name)
        return res.render('main', {
            page: './book/listbook',
            session: session,
            book_info: book_info,
            user_name : user_name
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.detailBook = async (req, res) => {
    let {book_number} = req.params

    try{
        let detail_info = await bookServices.detailBook(book_number)
        let session = req.session.user_name
        return res.render('main', {
            page:'./book/detailbook',
            session: session,
            detail_info: detail_info
        })
    }catch(err){
        return res.status(500).json(err);
    }
}
