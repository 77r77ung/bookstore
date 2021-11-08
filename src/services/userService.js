var pool = require('../../database/book_db');
var userQuery = require('../query/userQuery');

exports.signUp = async(id, pw, name) => {
    try{
        let signup = await pool.query(userQuery.signUp, [id, pw, name]);
        return signup[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.signIn = async(id, pw) => {
    try{
        let signin = await pool.query(userQuery.signIn, [id, pw])
        return signin[0]
    }catch(err){
        throw Error(err);
    }
}