import express from 'express';
import { hello } from './hello/hello';
// import contacts from './data/contacts.json';
import { apiGetMessages } from './controllers/messages/apiGetMessages';
import { apiGetMessagesDetail } from './controllers/messages/apiGetMessageDetail';

// console.log(contacts);

const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

app.get('/api/v1/messages', apiGetMessages);

app.get('/api/v1/messages/:id', apiGetMessagesDetail);

app.post('/api/v1/contacts', (req, res, next) => {
  res.send('here we post');
});


app.use((req, res, next) => {
  const error = new Error('route not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 400);
  res.json({
    status: '400',
    error: error.message,
  });
});

hello();

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));

export default app;
