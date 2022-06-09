const mocha = require('mocha');
const chai = require('chai');
const maths = require('./maths');

mocha.describe('Test adding', () => {
  mocha.it('should equal 2', () => {
    chai.expect(maths.add(1, 1)).to.equal(2);
  });
  mocha.it('should equal 4', () => {
    chai.expect(maths.add(2, 2)).to.equal(4);
  });
  mocha.it('should equal 10', () => {
    chai.expect(maths.add(5, 6)).to.equal(10);
  });
});
