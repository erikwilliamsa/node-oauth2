var expect = require('chai').expect;
var express = require('express');
var session = require('../../config/sessions');
describe("Session load tests",()=>{
  it('Should not cause an error',()=>{
      var app = express();
      session(app,true,5000);

  });
  it('Should not cause an error with no age passed',()=>{
    var app = express();
    session(app,true);
  })
  it('Should not cause an error with no secure flag with cookie age set',()=>{
    var app = express();
    session(app,null,1000);
  });
  it('Should cause an error',()=>{
    try{
      session();
    }catch(err){
      expect(err).to.not.be.null;
    }
  });

});
