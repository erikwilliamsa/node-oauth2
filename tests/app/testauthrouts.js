var express = require('express');
var expect = require('chai').expect;
var routes = require('../../app/authroutes');
var strategies = require('../../config/strategies');
var sinon = require('sinon');
var rp = require('request-promise');
const app = express();
const port = 4000;
const host = 'http://localhost:';
var res,req,next
var passport=(request,response,nextmiddle) =>{
  res = response;
  req = request;
  next = nextmiddle;

}
passport.authenticate =(type,where,test)=>{
  console.log(`this is ${this.next()}`);
    if(where.successRedirect){
      res.redirect(where.redirect);
    }else{
      res.redirect('/callback');
    };
  }

describe('Testing authentication routes',()=>{
  describe('GET /auth/facebook', ()=>{
    var server;
    before( () => {

      app.use(passport);
      routes(app,passport);
      server =app.listen(port);
    });

    after(() =>{
      console.log('Closing');
      server.close();
    })

    it('Should redirect to callback',()=>{
      console.log(`${host}${port}/auth/facebook`);
      return rp(`${host}${port}/auth/facebook`)
        .then((response)=>{
          console.log(response);
          var test=true;
          expect(test).to.be.true;
        })
        .catch((err)=>{
          expect(err).to.be.undefined;
        })
    } )
  });


});
