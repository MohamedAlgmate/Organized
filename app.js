var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var routes = require('./routes/index');
var users = require('./routes/users');
var cPanel = require('./routes/cPanel');
var Directors = require('./routes/Directors');
var WorkSite = require('./routes/WorkSite');
var Cities = require('./routes/Cities');
var Countries = require('./routes/Countries');
var Company = require('./routes/Company');
var MilitaryType = require('./routes/MilitaryType');
var OrganizationalUnits = require('./routes/OrganizationalUnits');Jobs
var Jobs = require('./routes/Jobs');
var Qualification = require('./routes/Qualification');
var QualifiedType = require('./routes/QualifiedType');
var Specialty = require('./routes/Specialty');
var JobStatus = require('./routes/JobStatus');
var Jobposition = require('./routes/Jobposition');
var LevelJob = require('./routes/LevelJob');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'naga_app',resave: true,saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);
app.use('/users', users);
app.use('/cPanel', cPanel);
app.use('/Directors', Directors);
app.use('/WorkSite', WorkSite);
app.use('/Cities', Cities);
app.use('/Countries', Countries);
app.use('/Company', Company);
app.use('/MilitaryType', MilitaryType);
app.use('/OrganizationalUnits', OrganizationalUnits);
app.use('/Jobs', Jobs);
app.use('/Qualification', Qualification);
app.use('/QualifiedType', QualifiedType);
app.use('/Specialty', Specialty);
app.use('/JobStatus', JobStatus);
app.use('/Jobposition', Jobposition);
app.use('/LevelJob', LevelJob);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
