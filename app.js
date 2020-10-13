var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var switchesRouter = require('./routes/api/switches');
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB Config
// const db = require('./config/keys').mongoURI;
const db = "mongodb+srv://beep:!Impulsive32@cluster0.2esdn.mongodb.net/keyboard?retryWrites=true&w=majority";

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/users', usersRouter);
app.use('/api/switches', switchesRouter);
app.use("/testAPI", testAPIRouter);

console.log("ran")
app.use(express.static('client/build'));
app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
})


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
const port = process.env.port || 5000;
app.listen(port, () => console.log('server started on port' + port))

module.exports = app;

