var session = require('express-session');
var session_secret = process.env.SESSION_SECRET || 'supersecret';
module.exports = (app,secure,cookieAge) =>{
  var cookie_age = process.env.COOKIE_AGE || cookieAge || 60000 ;

  app.use(session({
    secret: session_secret,
    cookie: {
      maxAge: cookie_age,
      secure: secure
    },
    resave: true,
    saveUninitialized: true,

  }));


}
