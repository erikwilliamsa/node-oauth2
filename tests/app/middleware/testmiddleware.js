var middleware = require('../../../app/middleware/middleware');
var sinon = require('sinon');
var expect = require('chai').expect;
var req ={};
var redirect =()=>{};
var res ={redirect: redirect};
var next=()=>{return 'next'};

describe('#isLoggedIn',()=>{

  var isauth =true;
  req.isAuthenticated = ()=>{
    return isauth;
  }
  it('Should be a function', ()=>{
    var isLoggedIn = middleware.isLoggedIn;
      expect(isLoggedIn).to.be.defined;
  });

  var nextstub = sinon.spy(next);

  it('Should call next if user is authenticated',()=>{
    isauth=true;
    middleware.isLoggedIn(req,res,nextstub);
    sinon.assert.calledOnce(nextstub);
  });

  it('Should call redirect if the user is not logged in', ()=>{
    isauth=false;

    var resstub = sinon.spy(redirect);
    res.redirect=resstub;
    middleware.isLoggedIn(req,res,next);
    sinon.assert.calledOnce(resstub);
  });

});
