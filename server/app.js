var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router = express.Router();

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var jsonParser = bodyParser.json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*
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
*/
router.get('/get', jsonParser, function(req, res){ //ajax get request process
  var data = req.query.name;
  var result = data+' '+'Success-GET';
  console.log(result);
  return res.json({result:result});
//  res.send({result:result});
})

router.post('/post', jsonParser, function(req, res){ //ajax post request process
  var data = req.body.name;
  var result = data+' '+'Success-POST';
  console.log(result);
  return res.json({result:result});
//  res.send({result:result});
})

app.use('/api', router);
module.exports = app;
