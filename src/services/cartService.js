const pool = require('../../database/book_db')
const cartQuery = require('../query/cartQuery')

exports.itemDetail = async (cart_number) => {

    try{
        let itemDetail = await pool.query(cartQuery.itemDetail, [cart_number])
        return itemDetail[0]
    }

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.cartDetail = async (session) => {

    try{
        let cartDetail = await pool.query(cartQuery.cartDetail, [session])
        return cartDetail[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addCart = async (cart_number, cart_date, session) => {

    try{
        let addCart = await pool.query(cartQuery.addCart, [cart_number, cart_date, session])
        return addCart[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.addItem = async (cart_number, book_number) => {

    try{
        let addItem = await pool.query(cartQuery.addItem, [cart_number, book_number])
        return addItem[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteItem = async (cart_number, book_number) => {

    try{
        let deleteItem = await pool.query(cartQuery.deleteItem, [cart_number, book_number])
        return deleteItem[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteItem2 = async (cart_number) => {

    try{
        let deleteItem2 = await pool.query(cartQuery.deleteItem2, [cart_number])
        return deleteItem2[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteCart = async (cart_number) => {

    try{
        let deleteCart = await pool.query(cartQuery.deleteCart, [cart_number])
        return deleteCart[0]
    } 

    catch (error) {
        console.log(error)
        throw Error(error)
    }

}