import chai from 'chai';

import chaiHttp from 'chai-http';

import server from '../server';

chai.use(chaiHttp);

chai.should();


describe('get all the users', () => {
  it('Should be able to get all the users', (done) => {
    chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });
});

describe('get a specific user', () => {
  it('Should be able to get a specific user', (done) => {
    chai.request(server)
      .get('/api/v1/users/1')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('Should be not able to get a specific user', (done) => {
    chai.request(server)
      .get('/api/v1/users/345324')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
});

describe('create a user', () => {
  it('Should be able to create a user', (done) => {
    const user = {
      email: 'lucas@gmail.com',
      firstname: 'luc',
      lastname: 'tuyishime',
      password: 'pierre'
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        done();
      });
  });

  it('Should not be able to create a user', (done) => {
    const user = {
      email: '',
      firstname: 'jean luc',
      lastname: 'tuyishime',
      password: 'pierre'
    };
    chai.request(server)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        done();
      });
  });
});

describe('/Delete a user', () => {
  it('should be able to delete a user', (done) => {
    chai.request(server)
      .delete('/api/v1/users/1')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('should not be able to delete a user', (done) => {
    chai.request(server)
      .delete('/api/v1/users/324324')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
});
