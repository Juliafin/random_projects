var sum = require('./../module1');
var {expect} = require('chai');


describe("Testing Sum function", () => {

  it("Adds numbers correctly", () => {

    expect(sum(10, 100)).to.equal(110)
    expect(sum(10,100)).to.be.a('number')
    expect(sum(20, 20.2)).to.not.equal(40.3)

    

  });

  it("Throws an error when provided with values that are not numbers", () => {

    expect(() => sum("hello", "how are you")).to.throw("Not a number")
    expect(() => sum({}, [])).to.throw("Not a number")
    expect(() => sum([], [])).to.throw("Not a number")
    expect(() => sum([1], [2])).to.throw("Not a number")
    expect(() => sum([1], [2])).to.throw("Not a number")
  })
});