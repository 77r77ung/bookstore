// 회원가입
exports.signUp = 'insert into user (id, pw, name) values(?, ?, ?)'

// 로그인
exports.signIn = 'select * from user where id=? and pw=?'