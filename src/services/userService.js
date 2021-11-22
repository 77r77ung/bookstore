var pool = require('../../database/book_db');
var userQuery = require('../query/userQuery');

exports.signUp = async(user_uid, user_password, user_name) => {
    try{
        let signUp = await pool.query(userQuery.signUp, [user_uid, user_password, user_name]);
        return signUp[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.signIn = async(user_uid, user_password) => {
    try{
        let signIn = await pool.query(userQuery.signIn, [user_uid, user_password])
        return signIn[0]
    }catch(err){
        console.log(error);
        throw Error(err);
    }
}