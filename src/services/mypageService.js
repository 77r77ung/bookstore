var pool = require('../../database/book_db');
var mypageQuery = require('../query/mypageQuery');

exports.addReco = async(user_reco) => {
    try{
        let add = await pool.query(mypageQuery.addReco, [user_reco])
        return add[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.listAdd = async(user_user_uid) => {
    try{
        let list = await pool.query(mypageQuery.listAdd, [user_user_uid])
        return list[0]
    }
    catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.addAdd = async(adderss_number, postal_code, default_address, optional_address, user_user_uid) => {
    try{
        let add = await pool.query(mypageQuery.addAdd, [adderss_number, postal_code, default_address, optional_address, user_user_uid])
        return add[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.updateAdd = async(postal_code, default_address, optional_address, adderss_number) => {
    try{
        let update = await pool.query(mypageQuery.updateCard, [postal_code, default_address, optional_address, adderss_number])
        return update[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.detailAdd = async(address_number) => {
    try{
        let detail = await pool.query(mypageQuery.detailAdd, [address_number])
        return detail[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteAdd = async (address_number) => {
    try{
        let del = await pool.query(mypageQuery.deleteAdd, [address_number])
        return del[0]
    }catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.listCard = async(user_user_uid) => {
    try{
        let list = await pool.query(mypageQuery.listCard, [user_user_uid])
        return list[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.addCard = async(card_number, card_type, expiry_date, user_user_uid) => {
    try{
        let add = await pool.query(mypageQuery.addCard, [card_number, card_type, expiry_date, user_user_uid])
        return add[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.updateCard = async(card_type, expiry_date, card_number) => {
    try{
        let update = await pool.query(mypageQuery.updateCard, [card_type, expiry_date, card_number])
        return update[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.detailCard = async(card_number) => {
    try{
        let detail = await pool.query(mypageQuery.detailCard, [card_number])
        return detail[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteCard = async(card_number) => {
    try{
        let del =await pool.query(mypageQuery.deleteCard, [card_number])
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}