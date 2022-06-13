/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../index');

const Trainer = require('../db');

mocha.describe('CRUD testing', () => {
  let id;
  mocha.beforeEach((done) => {
    Trainer.deleteMany({}).then(() => {
      Trainer.create({
        name: 'JH',
        age: 28,
        specialism: 'Shenanigans',
      }).then((result) => {
        id = result._id;
        done();
      }).catch((err) => console.error(err));
    }).catch((err) => console.error(err));
  });

  mocha.it('should create a trainer', (done) => {
    const requestBody = {
      name: 'anoush',
      age: 26,
      specialism: 'Software',
    };
    chai.request(server).post('/trainers/create').send(requestBody).end((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res.status).to.equal(201);
      chai.expect(res.body).to.include(requestBody);
      done();
    });
  });

  mocha.it('should find a trainer', (done) => {
    chai.request(server).get(`/trainers/read/${id}`).end((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res.body).to.include({
        _id: id.toString(),
        name: 'JH',
        age: 28,
        specialism: 'Shenanigans',
      });
      return done();
    });
  });

  mocha.it('should find all the trainers', (done) => {
    chai.request(server).get('/trainers/readAll').end((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res.body).to.have.lengthOf(1);
      chai.expect(res.body[0]).to.include({
        _id: id.toString(),
        name: 'JH',
        age: 28,
        specialism: 'Shenanigans',
      });
      return done();
    });
  });

  mocha.it('should update a trainer', (done) => {
    chai.request(server).put(`/trainers/update/${id}`).send({
      name: 'Ed',
      age: 26,
      specialism: 'SDET',
    }).end((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res.status).to.equal(202);
      chai.expect(res.body).to.include({
        name: 'JH',
        age: 28,
        specialism: 'Shenanigans',
      });
      done();
    });
  });

  mocha.it('should remove a trainer', (done) => {
    chai.request(server).delete(`/trainers/remove/${id}`).end((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res.status).to.equal(204);
      return done();
    });
  });
});
