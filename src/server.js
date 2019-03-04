import express from 'express';
import { log, logger } from './middleware/logger';
import userRouter from './controllers/users/route';
import messageRouter from './controllers/messages/route';
import inboxRouter from './controllers/userMessages/route';
import contactRouter from './controllers/contacts/route';

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

app.use('/api/v1/messages', inboxRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/contacts', contactRouter);

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
