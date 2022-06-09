const mocha = require('mocha');
const chai = require('chai');
const maths = require('./maths');

mocha.describe('Test adding', () => {
  mocha.it('should equal 2', () => {
    chai.expect(2).to.equal(maths.add(1, 1));
  });
  mocha.it('should equal 4', () => {
    chai.expect(4).to.equal(maths.add(2, 2));
  });
  mocha.it('should equal 10', () => {
    chai.expect(10).to.equal(maths.add(5, 6));
  });
});
