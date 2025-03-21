// Here all the express middelware types are initialized.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //logger that can accept format and options parameters

// Here are the paths/routes defines for the index and users files. (These are other js files.)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Make sure the 'app' variable is the express object.
var app = express();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// View/template engine setup
app.set('views', path.join(__dirname, 'views')); // The views are in the views folder.
app.set('view engine', 'jade'); // Views will now use the jade engine.

// Here all the different middelware function are initialized and ready to use.
app.use(logger('dev')); // dev stands for develepor mode.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // It serves files in the public directory.

// Here the path for the url is defined.
app.use('/', indexRouter); // Everything directs to the index page.
app.use('/users', usersRouter); // Only if there is 'users' in the url it will direct to the users page.

// Catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler.
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page.
  res.status(err.status || 500);
  res.render('error');
});

// Make sure all the 'app' requirements are implemented in the module object. (This determines what will be exposed when it required.)
module.exports = app;
