import chai from 'chai';

import chaiHttp from 'chai-http';

import server from '../server';

chai.use(chaiHttp);

chai.should();

describe('/Delete a message', () => {
  it('should be able to delete a message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/message/4')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('should not be able to delete a message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/message/32')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
});

describe('/get all messages', () => {
  it('Should be able to get all the messages..', (done) => {
    chai.request(server)
      .get('/api/v1/messages').end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });
});

describe('/get all unread messages', () => {
  it('Should be able to get all unread messages..', (done) => {
    chai.request(server)
      .get('/api/v1/messages/unread/messages').end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });
});


describe('/get a specific message', () => {
  it('Should be able to get a specific message', (done) => {
    chai.request(server)
      .get('/api/v1/messages/message/1')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('Should not be abe to get a specific message....', (done) => {
    chai.request(server)
      .get('/api/v1/messages/message/42423')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
});


describe('create a message', () => {
  it('Should be able to create a message', (done) => {
    const message = {
      subject: 'dsfdsafjlsf lskdjfsadf',
      message: 'here is the application for playing',
      senderId: 8,
      status: 'sent'
    };
    chai.request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        done();
      });
  });

  it('Should not be able to create a message', (done) => {
    const message = {
      createdOn: 'March 01 2019',
      subject: '',
      message: 'here is the application for playing',
      parentMessageId: 0,
      status: 'sent'
    };
    chai.request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        done();
      });
  });
});


// test create
describe('update a message', () => {
  it('Should be able to update a message', (done) => {
    const message = {
      subject: 'dsfdsafjlsf lskdjfsadf',
      message: 'here is the application for playing',
      senderId: 12,
      status: 'sent'
    };
    chai.request(server)
      .patch('/api/v1/messages/message/4')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        done();
      });
  });

  it('Should not be able to update a message', (done) => {
    const message = {
      subject: '',
      message: 'here is the application for playing',
      status: 'sent'
    };
    chai.request(server)
      .patch('/api/v1/messages/message/4')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        done();
      });
  });
});

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


describe('create a message', () => {
  it('Should be able to send a message to a user', (done) => {
    const message = {
      subject: 'dsfdsafjlsf lskdjfsadf',
      message: 'here is the application for playing',
      senderId: 8,
      status: 'sent'
    };
    chai.request(server)
      .post('/api/v1/messages/2')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        done();
      });
  });

  it('Should be able to send a message to a user', (done) => {
    const message = {
      createdOn: 'March 01 2019',
      subject: '',
      message: 'here is the application for playing',
      parentMessageId: 0,
      status: 'sent'
    };
    chai.request(server)
      .post('/api/v1/messages/4234')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        done();
      });
  });
});
