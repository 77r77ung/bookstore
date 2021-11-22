const { NotExtended } = require('http-errors');
const userServices = require('../services/userService');

exports.signIn = async(req, res) => {
    const { user_uid, user_password } = req.body;
    try{
        let signIn = await userServices.signIn(user_uid, user_password);
        console.log('aa');
        console.log(signIn[0].user_uid);
        req.session.user_uid = signIn[0].user_uid;
        req.session.user_name = signIn[0].user_name;
        console.log("session : ",req.session.user_uid)
        return res.redirect('/');
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/user/signIn";</script>');
    }
}

exports.signInPage = async(req, res) => {
    try{
        console.log("signinpage in");
        const session = req.session.user_uid;
        return res.render('main', {
            page:'./user/signin',
            session:session
        })
    }catch(err){
        return res.status(500).json(err)
    }
}



exports.signUp = async(req, res) => {
    /* 회원가입에 필요한 정보를 받아오는 부분
    req= require / const id, const pw, pass name을 추출해서 body에 있다. */
    const {user_uid, user_password, user_name} = req.body;
    try{
        await userServices.signUp(user_uid, user_password, user_name);
        if(signUp == 1062){
            return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디입니다."); 
                location.href='./signup';
                </script>`);
        }else{
            return res.redirect('/')
        }
    }catch(error){
        return res.status(500).json(error);
    }
}

exports.signUpPage = async(req, res) => {
    try{
        /* 회원가입 시 입력한 정보를 세션에 저장
        let user = req.session.id;
        res.render("ejs 파일 이름", {데이터 이름: 전송할 데이터});
        >> POST로 데이터 보낼 때 사용하는 코드이기 때문에 signUpPage 띄우는 코드에는 필요 없음!*/
        const session = req.session.user_uid;
        return res.render('main', {
            page: './user/signup', 
            session:session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.logout = async(req, res) =>{
    // 로그아웃 시 로그인 한 회원의 세션을 파괴
    if(req.session){
        console.log('로그아웃 처리');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/');
            }
        );
    }else{
        console.log('로그인 안 되어 있음');
        res.redirect('/user/signin');
    }
}

/*
exports.main = async(req, res) => {
    // 로그인한 회원의 아이디를 가져옴
    try{
        let user = await userServices.main(id);
        // let book = await bookServcies.main();
        var session = req.body.id;
        var users = req.session;
        console.log(users);
        return res.render('main')
    }catch(err){
        return res.status(500).json(err);
    }
}
*/