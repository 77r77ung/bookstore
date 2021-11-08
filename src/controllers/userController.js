var userServices = require('../services/userService');

exports.signUp = async(req, res) => {
    /* 회원가입에 필요한 정보를 받아오는 부분
    req= require / const id, const pw, pass name을 추출해서 body에 있다. */
    const {id, pw, name} = req.body;
    try{
        await userServices.signUp(id, pw, name);
        //res.redirect: 페이지로 이동
        return res.redirect('signup');
    }catch(error){
        /* 중복된 아이디가 있을 경우
        Java Script문의 ALERT( )로 ALERT 알림창 띄우기 
        뒤에 doucument.location.href = 은 URL 주소창에 해당 URL을 입력한 거랑 동일한 효과 */
        res.send('<script type="text/javascript">alert("이미 사용중인 아이디 입니다."); document.location.href="/user/signup";</script>')
        return res.status(500).json(error);
    }
}

exports.signUpPage = async(req, res) => {
    try{
        /* 회원가입 시 입력한 정보를 세션에 저장
        let user = req.session.id;
        res.render("ejs 파일 이름", {데이터 이름: 전송할 데이터});
        >> POST로 데이터 보낼 때 사용하는 코드이기 때문에 signUpPage 띄우는 코드에는 필요 없음!*/
        return res.render('/signup');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signIn = async(req, res) => {
    // 로그인 시 필요한 정보를 입력하는 부분
    const { id, pw } = req.body;
    try {
        let signin = await userServices.signIn(id, pw);
        console.log(signin)
        // req.seesion 객체에 property를 할당해 세션에 값을 줌 (id 세션에 값을 부여)
        req.session.userId = signin[0].id;
        return res.send(`<script type="text/javascript">alert("로그인에 성공하셨습니다."); location.href="/";</script>`);
    } catch (err) {
        return res.send(`<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/user/signin";</script>`);
        console.log(err);
    }
}

exports.signInPage = async(req, res) => {
    try{
        user = req.session;
        //login.ejs에 session에 저장한 유저의 데이터를 user의 이름으로 불러오기
        return res.render('signin');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.logout = async(req, res) => {
    // 로그아웃: 로그인 한 회원의 세션을 파괴
    if(req.session){
        console.log('로그아웃');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제 시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/user/main');
            }
        );
    }else{
        console.log('로그인이 안 되어 있음');
        res.redirect('/user/singin');
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