import express from 'express';
import { log, logger } from './middleware/logger';
import userRouter from './controllers/users/apiUsers';
import messageRouter from './controllers/messages/apiMessages';

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

app.use('/api/v1/messages', messageRouter);
app.use('/api/v1/users', userRouter);

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
