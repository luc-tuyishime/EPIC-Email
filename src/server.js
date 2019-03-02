import express from 'express';
import * as bodyparser from 'body-parser';
import { log } from './middleware/logger';
import { apiGetMessages, apiGetUnreadMessages } from './controllers/messages/apiGetMessages';
import { apiCreateMessage } from './controllers/messages/apiCreatemessage';
import { apiGetMessagesDetail } from './controllers/messages/apiGetMessageDetail';
import { apiDeleteMessage } from './controllers/messages/apiDeleteMessage';
import { apiUpdateMessage } from './controllers/messages/apiUpdateMessage';

const app = express();

const jsonParser = bodyparser.json();

// middleware for logging request
const logger = (req, res, next) => {
  console.log(`${new Date()} - ${req.method} Request to ${req.path}`);
  next();
};

app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

app.get('/api/v1/messages', apiGetMessages);

app.get('/api/v1/messages/unread', apiGetUnreadMessages);

app.get('/api/v1/messages/:id', apiGetMessagesDetail);

app.post('/api/v1/messages', jsonParser, apiCreateMessage);

app.delete('/api/v1/messages/:id', apiDeleteMessage);

app.patch('/api/v1/messages/:id', jsonParser, apiUpdateMessage);

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
