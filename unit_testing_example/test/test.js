const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const appendArray = require('./../function1');
const server = require('./../server');

chai.use(chaiHttp);

//describe block refers to a suite of tests
describe('Testing append array function', function() {

  it('Appends the array correctly', function() {
    console.log('We are testing the array function here');
    expect(5).to.equal(parseInt("5"));

    // test our function

    var testArray = [1,2,3,4,5];

    var resultArr = appendArray(testArray, "hello");

    expect(resultArr.length).to.be.greaterThan(testArray.length);
    expect(Array.isArray(testArray)).to.equal(true);
    expect(Array.isArray(resultArr)).to.equal(true);
    expect(resultArr.length).to.equal(testArray.length + 2)
    expect(resultArr[0]).to.equal("hello");
    expect(resultArr[resultArr.length-1]).to.equal("hello");

  });


  it ('Throws an error when the function is passed something that is not an array as a first argument', function () {

    var badArray = {name: "Jackie"};
    // Test that the error is thrown
    expect(
      function() { appendArray(badArray, "hello")}).to.throw()
    
      // Tests that the error contains the right message
      expect(
      function() { appendArray(badArray, "hello")}).to.throw('The first argument must be an array')
        
      // Tests that the error has a message property
      expect(
        function() { appendArray(badArray, "hello")}).to.throw(Error).with.property('message')
  })


}) 





describe('Test api get route', () => {

  after(function() {
    server.close();
  });


  it('Returns the right results', () => {
    return chai.request(server)
      .get('/')
      .then((result) => {
        console.log(result.body);

        // expect(result.body).to.exist();
        expect(result.body).to.be.a('object');
        expect(result.body).to.have.all.keys('message', 'number', 'names');
        expect(result.body.message).to.be.a("string")
        expect(result.body.number).to.be.a("number")
        expect(result.body.names).to.be.a("array")
        expect(result.body.message).to.equal('hello');
        expect(result.body.number).to.equal(10);
        expect(result.body.names).to.be.an('array').that.includes('Oscar', 'Patty', 'Jason', 'Michelle','Boris');
      })

  });

});