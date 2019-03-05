import chai from 'chai';

import chaiHttp from 'chai-http';

import server from '../server';

chai.use(chaiHttp);

chai.should();



describe('create a message to user', () => {
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
