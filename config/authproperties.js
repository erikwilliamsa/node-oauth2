var faceBookAppID =process.env.FB_APP_ID || 'test_value';
var faceBookSecret= process.env.FB_APP_SECRET || 'test_value_secret';
var facebookCallback = process.env.FB_CALLBACK || "http://localhost:3000/auth/facebook/callback"


module.exports = {

    facebookAuth : {
        clientID      : faceBookAppID,
        clientSecret  : faceBookSecret,
        callbackURL   : facebookCallback,
    },
    googleAuth : {
      googleID :'something',
      googleSecret:'somethingesecret',
    }

};
