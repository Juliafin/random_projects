const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('./../app');
const {expect} = chai;
chai.use(chaiHTTP)

describe("Testing endpoints", () => {

  it("/test endpoint", () => {
    
    return chai.request(server)
      .get('/test')
      .then((response) => {
        // console.log(response)
        let responseJSON = response.body;
        let responseString = 'Hello, you have reached the server'
  
        expect(responseJSON).to.be.a('object')
        expect(responseJSON).to.have.keys('message')
        expect(responseJSON.message.length).to.be.equal(responseString.length)
        expect(responseJSON.message).to.be.equal(responseString)
        
      });

  })
});