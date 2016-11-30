var express = require('express');
module.exports = ()=>{

      before( () => {
        const app = express();
        app.use(cookieParser('supersecret'));
        app.use(passport.initialize());
        app.use(passport.session()); // persistent login sessions

      })

}
