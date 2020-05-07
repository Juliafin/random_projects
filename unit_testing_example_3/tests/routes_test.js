
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

// integrates the http chai plugin into the main chai library
chai.use(chaiHttp);

const {app, server} = require('../server');


describe('Test route', () => {

  afterEach(() => {
    server.close();
  });

  it('/test returns the expected result', () => {
    chai
      .request(app)
      .get('/test')
      .then((response) => {
        console.log('Response from the server: ');
        console.log(response);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.key('message');
        expect(response.body.message).to.be.a("string");
        expect(response.body.message.length).to.be.greaterThan(0);
        expect(response.body.message).to.equal("This is a success");

      })
      .catch(err => {
        throw new Error(err.message);
      });

  });

});





