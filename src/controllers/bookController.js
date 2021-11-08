var bookServices = require('../services/bookService');

exports.main = async(req, res) => {
    try{
        let list = await bookServices.main();
        return res.render('main', {list:list});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addBook = async(req, res) => {
    let {book_number, book_name, book_amount, book_price} = req.body;
    try{
        await bookServices.addBook(book_number, book_name, book_amount, book_price);
        return res.redirect('addBook');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addBookPage = async(req, res) => {
    try{
        return res.render('/addBook');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateBook = async(req, res) => {
    let {book_name, book_amount, book_price} = req.body;
    let {book_number} = req.params;
    try{
        await bookServices.updateBook(book_name, book_amount, book_price, book_number)
        return res.redirect('updatebook')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateBookPage = async(req, res) => {
    try{
        return res.render('/updateBook');
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

exports.detailBook = async (req, res) => {
    let {book_number, book_name, book_amount, book_price} = req.params
    try{
        let detail = await bookServices.detailBook(book_number, book_name, book_amount, book_price);
        return res.render('detailBook', {detail:detail});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.detailBookPage = async(req, res) => {
    try{
        return res.render('/detailbook');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listBook = async (req, res) => {
    let {book_number} = req.params;
    try{
        let list = await bookServices.listBook();
        return res.render('listBook', {list:list});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listBookPage = async(req, res) => {
    try{
        return res.render('main');
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.detailBook = async (req, res) => {
    try{
        res.rener('detailBook');
    }catch{
        return res.status(500).json(err);
    }
}