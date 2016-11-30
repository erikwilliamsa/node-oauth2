var ap = require('../../config/authproperties.js');
var expect = require('chai').expect;

describe('Auth Properties',()=>{
  describe('FaceBook Strategy Properties', ()=>{
    it('Should retrun facebook OAuth2Properties',()=>{
      expect(ap.facebookAuth).to.have.property('clientID');
      expect(ap.facebookAuth).to.have.property('clientSecret');

    });
  });
  describe('Google Strategy', ()=>{
    it('Should have an object', ()=>{
      expect(ap).to.have.a.property("googleAuth");
    });
  });
  

});
