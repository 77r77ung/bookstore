// 회원가입
exports.signUp = 'insert into user (user_uid, user_password, user_name) values(?, ?, ?)'

// 로그인
exports.signIn = 'select * from user where user_uid=? and user_password=?'