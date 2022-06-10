const mocha = require('mocha');
const chai = require('chai');
const maths = require('./maths');

mocha.describe('Doggo competition', () => {
  mocha.it('should be length 99', () => {
    chai.expect(maths.doggoCompetition(12)).to.have.lengthOf(99);
  });
  mocha.it('should not include', () => {
    chai.expect(maths.doggoCompetition(23)).to.not.include('23rd');
  });
  mocha.it('should end in st', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('21st');
  });
  mocha.it('should end in nd', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('32nd');
  });
  mocha.it('should end in rd', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('43rd');
  });
  mocha.it('should be 11th', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('11th');
  });
  mocha.it('should be 12th', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('12th');
  });
  mocha.it('should be 13th', () => {
    chai.expect(maths.doggoCompetition(15)).to.include('13th');
  });
});

mocha.describe('Reverse factorial', () => {
  mocha.it('should return 1!', () => {
    chai.expect('1!').to.equal(maths.reverseFactorial(1));
  });
  mocha.it('should return 2!', () => {
    chai.expect('2!').to.equal(maths.reverseFactorial(2));
  });
  mocha.it('should return 3!', () => {
    chai.expect('3!').to.equal(maths.reverseFactorial(6));
  });
  mocha.it('should return 4!', () => {
    chai.expect('4!').to.equal(maths.reverseFactorial(24));
  });
  mocha.it('should return 5!', () => {
    chai.expect('5!').to.equal(maths.reverseFactorial(120));
  });
  mocha.it('should return NONE', () => {
    chai.expect('NONE').to.equal(maths.reverseFactorial(130));
  });
});

mocha.describe('Test adding', () => {
  mocha.it('should equal 2', () => {
    chai.expect(2).to.equal(maths.add(1, 1));
  });
  mocha.it('should equal 4', () => {
    chai.expect(4).to.equal(maths.add(2, 2));
  });
  mocha.it.skip('should equal 10', () => {
    chai.expect(10).to.equal(maths.add(5, 6));
  });
});
