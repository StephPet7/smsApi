var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser =  require('body-parser')
var db = require('./models')

var message = require('./routes/message')
var messageDiff = require('./routes/messageDiff')
var indexRouter = require('./routes/index');
var utilisateur = require('./routes/utilisateur');
var contact = require('./routes/contact');
var diffusion=require('./routes/diffusion');
var listdiffusion=require('./routes/listdiffusion')
// j'importe les routes..
db.sequelize.sync()
.then(() => {
  	console.log('Database connected')
})
.catch((err) => console.log(err))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Je definis mes routes
app.use('/', indexRouter);
app.use('/user/', utilisateur);
app.use('/message', message);
app.use('/messageDiff', messageDiff);
app.use('/contact',contact);
app.use('/diffusion',diffusion);
app.use('/user', utilisateur);
app.use('/listdiffusion',listdiffusion)



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
