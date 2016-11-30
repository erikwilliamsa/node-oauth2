var expect = require('chai').expect;
var strat_props = require('../../config/authproperties.js');
var strategies = require('../../config/strategies.js');
var sinon = require('sinon');

describe('Get FacebookStrategy', ()=>{

  describe('Get a new facebook strategy when when given an appropriate strategy', ()=>{

      it('Should return the FacebookStrategy', ()=>{
        var fbs = strategies.getStrategy('facebook',strat_props.facebookAuth);

        expect(fbs).to.have.property('name','facebook');
      });

  });
});

describe('#findOrCreateFaceBookUser',()=>{
  var token='EAADkcWhHXFQBAOCTnPyUYyem1tyeXoYgxhDVpw4sUaBqcywW9UCUyaw6yD0nGb6dFfJ03IOXa5WBVthE0j3NWrtGEZCgH3ZAjkjtpcCOkLlNx2'
  var profileString='{"id":"10209576492664401","displayName":"Test User","name":{},"emails":[{"value":"testuser@netscape.net"}],"provider":"facebook","_raw":"{\\"id\\":\\"10209576492664401\\",\\"name\\":\\"Test User\\",\\"email\\":\\"testuser\\u0040netscape.net\\"}","_json":{"id":"10209576492664401","name":"Test User","email":"testuser@netscape.net"}}';
  var refreshToken;

  function callback(a,user){

    return user;
  }
  it('Should return a populated user object',()=>{
    expect(strategies.findOrCreateFaceBookUser(token,refreshToken,JSON.parse(profileString),callback)).to.have.property('id','10209576492664401');
    expect(strategies.findOrCreateFaceBookUser(token,refreshToken,JSON.parse(profileString),callback)).to.have.property('token',token);
    expect(strategies.findOrCreateFaceBookUser(token,refreshToken,JSON.parse(profileString),callback)).to.have.property('email','testuser@netscape.net');
  })
})
