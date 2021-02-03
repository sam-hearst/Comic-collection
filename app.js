const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { sessionSecret } = require('./config');
const { restoreUser } = require('./auth')

const app = express();

// view engine setup
app.set('view engine', 'pug');

//morgan
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
   res.locals.session = req.session 
   next();
  })
// need to fix restore user middleware to restore session 
// app.use(restoreUser);



// set up session middleware
const store = new SequelizeStore({ db: sequelize });


app.use(
  session({
    name: 'comic-collections.sid',
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

app.use('/', indexRouter);
app.use('/users', usersRouter);

// when you register a user or login a user
// express session docs => session.save
// app.post('/users/login', async (req, res) => {
//   // login user
//   req.session.user = user;
//   const isPassword = await bcrypt.compare(password, user.hashedPassword)

//   if (isPassword) {
//     return req.session.save(() => {
//       res.redirect('/');
//     })
//   } else {
//     res.render('login');
//   }
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
