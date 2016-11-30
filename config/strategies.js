var FacebookStrategy = require('passport-facebook').Strategy;
var Users =[];
exports.getStrategy =  (strategy,strat_props)=>{
console.log(strategy);
  switch (strategy) {

    case 'facebook':
          return getFaceBookStrategy(strat_props);
        break;
        default:

      };
}

function getFaceBookStrategy(strat_props){

  return new FacebookStrategy({

        clientID        : strat_props.clientID,
        clientSecret    : strat_props.clientSecret,
        callbackURL     : strat_props.callbackURL,
        profileFields: ['id', 'displayName', 'email'],

    },
    findOrCreateFaceBookUser);

}

function findOrCreateFaceBookUser(token, refreshToken, profile, callback) {
    /*
     This is where we'd seaarch for a users info in our database. This will
     be slightly differnt depending on the database used to store users.

     However, the basic idea is, if user exests, return the profile,
     otherwise create and store the new users.

     Here we simply use an array as an exmple.
    */
    /*
    console.log(`Token" ${token}`);
    console.log(`RefreshToken: ${refreshToken}`);
    console.log(JSON.stringify(profile));*/

    if (Users[profile.id]){

    return callback(null,Users[profile.id]);
  }else{

        Users[profile.id] = {

              id: profile.id,
              token: token,
              name: profile.displayName,
              familyName: profile.name.familyName,
              email: profile.emails[0].value,

        };
      //  console.log('New User: '+ JSON.stringify(Users[profile.id]));
        return callback(null, Users[profile.id]);
  }


}

//For testing
exports.findOrCreateFaceBookUser= (token,refreshToken,profile,callback)=>{
    return findOrCreateFaceBookUser(token,refreshToken,profile,callback);
};
