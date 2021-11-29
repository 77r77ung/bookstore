var pool = require('../../database/book_db')
var orderQuery = require('../query/orderQuery')

exports.addOrder = async(order_number, order_date, order_total, postal_code, default_address, optional_address, card_number, card_type, expiry_date, user_user_uid) => {
    try{
        let addOrder = await pool.query(orderQuery.addOrder, [order_number, order_date, order_total, postal_code, default_address, optional_address, card_number, card_type, expiry_date, user_user_uid])
        return addOrder[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.addOrderList = async(order_number, book_book_number, order_amount) => {
    try{
        let addOrderList = await pool.query(orderQuery.addOrderList, [order_number, book_book_number, order_amount])
        return addOrderList[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.minusOrderAmount =  async(order_amount, book_book_number) => {
    try{
        let minusOrderAmount = await pool.query(orderQuery.minusOrderAmount, [order_amount, book_book_number])
        return minusOrderAmount[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.selectOrder = async(session) => {
    try{
        let selectOrder = await pool.query(orderQuery.selectOrder, [session])
        return selectOrder[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.orderDetail = async(order_number) => {
    try{
        let orderDetail = await pool.query(orderQuery.orderDetail, [order_number])
        return orderDetail[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.orderBookList = async(order_number) => {
    try{
        let orderBookList = await pool.query(orderQuery.orderBookList, [order_number])
        return orderBookList[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.selectOrderList = async(order_number) => {
    try{
        let selectOrderList = await pool.query(orderQuery.selectOrderList, [order_number])
        return selectOrderList[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.plusOrder = async(order_amount, book_book_number) => {
    try{
        let plusOrder = await pool.query(orderQuery.plusOrder, [order_amount, book_book_number])
        return plusOrder[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteOrderList = async(order_number, book_book_number) => {
    try{
        let deleteOrderList = await pool.query(orderQuery.deleteOrderList, [order_number, book_book_number])
    return deleteOrderList[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteOrder = async(order_number) => {
    try{
        let deleteOrder = await pool.query(orderQuery.deleteOrder, [order_number])
        return deleteOrder[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

