const createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require("mongoose"),
    cors = require('cors'),

    indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    jobs = require('./routes/jobs'),
    category = require('./routes/categories'),
    employersRouter = require('./routes/employers'),
    api = require('./routes/api'),
    candidateRouter = require('./routes/candidate'),

    app = express();

mongoose.connect('mongodb://ur3t2u7zhtcxpddnhzqm:f87U3crQsSB6aoCFVN5P@b9invpwpg025npu-mongodb.services.clever-cloud.com:27017/b9invpwpg025npu', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);
app.use('/jobs', jobs);
app.use('/categories', category);
app.use('/employers', employersRouter);
app.use('/candidates', candidateRouter);


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
