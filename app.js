var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// 라우터 연결
// var indexRouter = require('./src/routes/index');
// var usersRouter = require('./src/routes/users');

var mainRouter = require('./src/routes/mainRoute');
var userRouter = require('./src/routes/userRoute');
var bookRouter = require('./src/routes/bookRoute');
var mypageRouter = require('./src/routes/mypageRoute');



var app = express();

// session에 해당하는 내용
app.use(session({
  secret:'hello',
  resave:false,
  saveUninitialized:true
}));


// 304 관련
app.get('/*', function(req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

//method
app.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter); 
//app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/mypage', mypageRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
