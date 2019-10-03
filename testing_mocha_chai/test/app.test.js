const { expect } = require('chai');
const sum = require('../app');


// Describe is containing a group of tests - Test suite
describe('sum', function() {

  it('Should return the correct sum when passed two numbers', function() {

    // 1. Do setup if necessary (declare necessary variables for the test)

    const expectedResult = 10;

    // 2. Execute the test code

    const result = sum(2, 8);

    // 3. Assert whether the test result is successful or not

    expect(result).to.be.a('number');
    expect(result).to.be.greaterThan(9);
    expect(result).to.equal(expectedResult);

  });

  it('Should return 0 when passed parameters that are not numbers', function() {
     // 1. Do setup if necessary (declare necessary variables for the test)

    const expectedResult = 0;

     // 2. Execute the test code
 
     const result = sum("2", "8");
 
     // 3. Assert whether the test result is successful or not
 
    expect(result).to.be.a('number');
    expect(result).to.be.lessThan(1);
    expect(result).to.equal(expectedResult);

  });

  it('Should return 0 when passed the incorrect number of parameters', function() {
    // 1. Do setup if necessary (declare necessary variables for the test)

    const expectedResult = 0;

    // 2. Execute the test code

    const result1 = sum();
    const result2 = sum("hi");
    // 3. Assert whether the test result is successful or not

    expect(result1).to.be.a('number');
    expect(result1).to.be.lessThan(1);
    expect(result1).to.equal(expectedResult);

    expect(result2).to.be.a('number');
    expect(result2).to.be.lessThan(1);
    expect(result2).to.equal(expectedResult);

  });

  it('Should return the right sum when passed floating point numbers', function() {
    // 1. Do setup if necessary (declare necessary variables for the test)

    const expectedResult = 0.61;

    // 2. Execute the test code

    const result = sum(0.21, 0.4);

    // 3. Assert whether the test result is successful or not

    console.log(0.21 + 0.4 === 0.61);
    expect(result).to.be.a('number');
    expect(result).to.equal(expectedResult);

  });
});