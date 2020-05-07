const sum = require("../module1");

// Invoke Chai - Assertion library

const expect = require("chai").expect;

describe("Sum function", function() {

  it("should add numbers together and give the right result", function() {
    console.log("Inside our first test");
    // expect("Hello").to.equal("Helo");
    const expectedOutput = 4;
    expect(sum(5, 12)).to.be.a("number");
    expect(sum(2, 2)).equal(expectedOutput);
    // expect(sum("3", 3)).to.be.a("number");
  });

  it("should throw an error when things are passed in that are not numbers", function() {
    expect(function() {
      sum("hi", 3);
    
    }).to.throw();
  });
});