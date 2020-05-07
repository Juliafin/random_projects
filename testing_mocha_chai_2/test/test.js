const {expect} = require('chai');
const chai = require('chai');
const sum = require('./../unit_test_module');
const chaiHttp = require('chai-http');
const server = require('./../server');
chai.use(chaiHttp);


// Unit tests test individual functions or blocks of code
describe('Testing sum function', () => {

  it('Returns an accurate result', () => {
    expect(2).to.equal(2);
    expect(sum(2,5)).to.equal(7);
    // expect(sum(2.92,5)).to.equal(7.92);
    expect(sum(-100,200)).to.equal(100);

  });

  it('Throws an error when provided with values that are not numbers', () => {
    expect(() => {sum([], {})}).to.throw();
  })
  
});


// Integration test
describe('Testing REST api', () => {

  after(() => {
    server.close();
  }); 
  
  it('Server returns a success message', () => {

    return chai.request(server)
      .get('/')
      .then((result) => {
        // console.log('This is the result', result.body);
        expect(result).to.have.status(200);
        expect(result.body).to.be.a('object');
        expect(result.body).to.include.all.keys('message');
        expect(result.body.message).to.equal('Success');

      })

  });


  it('Increment route returns an incremented number', () => {
    var sendData = {num:1}
    return chai.request(server)
    .post('/incrementOne')
    .send(sendData)
    .then((result) => {
      console.log(result.body);
      expect(result.body.num).to.be.greaterThan(sendData.num);
      // test the values of the server response
    });
  });

});


