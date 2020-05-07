var calc = require('./../index');
const {expect} = require('chai')
describe('calc', () => {
  // console.log(chai);

  it ('Adds the right numbers', () => {
    expect(calc(2,2, 'add')).to.eql(4);
    expect(calc(100,100, 'add')).to.eql(200)
  })
})