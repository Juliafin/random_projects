var chai = require('chai');
var {expect} = require('chai');
var sum = require('../app');
var chaiHttp = require('chai-http');
var server = require('../server');

// setup chai-http

chai.use(chaiHttp);





// the describe block describes the suite of tests (the collection of tests we are running for a specific thing)
describe('The sum function', () => {
  it('Adds things', () => {
    console.log('it adds things!');
    expect(sum(2, 5)).to.equal(7);
    expect(sum(200, 5)).to.equal(205);
    expect(sum(9999, 1)).to.equal(10000);
  });

  it('Fails when passed things that are not numbers', () => {
    expect(function () {
      return sum("!", []);
    }).to.throw();
    expect(function() {
      return sum({}, {});
    });

  });
});


describe('Our server', () => {

  after(function() {
    // server.close();
    console.log('tests are done');
  });



  it ('Connects without problems', () => {
    return chai.request(server)
      .get('/');
  });

  it ('returns the values we expect', () => {
    return chai.request(server)
      .get('/')
      .then((response) => {
        console.log('the response', response);

        expect(response.body).to.have.keys('message', 'value');

      });
  });

});

