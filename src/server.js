import express from 'express';
import { log } from './middleware/logger';
import { apiGetMessages, apiGetUnreadMessages } from './controllers/messages/apiGetMessages';
import { apiGetMessagesDetail } from './controllers/messages/apiGetMessageDetail';

const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

app.get('/api/v1/messages', apiGetMessages);

app.get('/api/v1/messages/unread', apiGetUnreadMessages);

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

log();

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));

export default app;
