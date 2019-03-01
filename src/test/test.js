import chai from 'chai';

import chaiHttp from 'chai-http';

import server from '../server';

chai.use(chaiHttp);

chai.should();

describe('/Delete a message', () => {
  it('should be able to delete a message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/2')
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('should not be able to delete a message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/324324')
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
      .get('/api/v1/messages/unread').end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('Should not be able to get all unread messages..', (done) => {
    chai.request(server)
      .get('/api/v1/messages/unreadfsfs').end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(404);
        done();
      });
  });
});


describe('/get a specific message', () => {
  it('Should be able to get a specific message', (done) => {
    chai.request(server)
      .get('/api/v1/messages/1')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  it('Should not be abe to get a specific message', (done) => {
    chai.request(server)
      .get('/api/v1/messages/42423')
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
      createdOn: 'March 01 2019',
      subject: 'andela application',
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
        res.body.should.have.property('status').eql(201);
        done();
      });
  });

  // it('Should not be able to create a message', (done) => {
  //   const message = {
  //     createdOn: 'March 01 2019',
  //     subject: '',
  //     message: 'here is the application for playing',
  //     parentMessageId: 0,
  //     status: 'sent'
  //   };
  //   chai.request(server)
  //     .post('/api/v1/messages')
  //     .send(message)
  //     .end((err, res) => {
  //       console.log(res.body);
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('status').eql(400);
  //       done();
  //     });
  // });
});


// test create
describe('update a message', () => {
  it('Should be able to update a message', (done) => {
    const message = {
      subject: 'andela application'
    };
    chai.request(server)
      .patch('/api/v1/messages/2')
      .send(message)
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        done();
      });
  });

  // it('Should not be able to update a message', (done) => {
  //   const message = {
  //     createdOn: '17/01/19',
  //     location: '',
  //     topic: 'we here',
  //     happeningOn: '03/01/19',
  //     tags: 'java rubi'
  //   };
  //   chai.request(server)
  //     .patch('/api/v1/messages/1')
  //     .send(message)
  //     .end((err, res) => {
  //       console.log(res.body);
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('status').eql(400);
  //       done();
  //     });
  // });
});
