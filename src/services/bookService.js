var pool = require('../../database/book_db');
var bookQuery = require('../query/bookQuery');


exports.addBook = async(book_name, book_amount, book_price) => {
    try{
        let addBook = await pool.query(bookQuery.addBook, [book_name, book_amount, book_price])
        return addBook[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.updateBook = async(book_name, book_amount, book_price) => {
    try{
        let updateBook = await pool.query(bookQuery.updateBook, [book_name, book_amount, book_price])
        return updateBook[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteBook = async(book_number) => {
    try{
        let deleteBook = await pool.query(bookQuery.deleteBook, [book_number])
        return deleteBook[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.listBook = async() => {
    try{
        let list = await pool.query(bookQuery.listBook)
        return list[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.detailBook = async(book_number) => {
    try{
        let detailBook = await pool.query(bookQuery.detailBook, [book_number])
        return detailBook[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}