var port = process.env.PORT || '3000';
var express = require('express');
var passport = require('passport');
var authroutes = require('./app/authroutes');
var sessions = require('./config/sessions');
var strategies = require('./config/strategies.js');
var authprops = require('./config/authproperties.js');
var cookieParser = require('cookie-parser');

passport.use(strategies.getStrategy('facebook',authprops.facebookAuth));

const app = express();
app.use(cookieParser('supersecret'));
sessions(app);
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

authroutes(app,passport);

var server = app.listen(port, function () {
   var host = server.address().address;


   console.log("Example app listening at http://%s:%s", host, port)
})


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
