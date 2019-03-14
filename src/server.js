import express from 'express';
import path from 'path';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { log, logger } from './middleware/logger';
import Router from './routes/index';
import swaggerDocument from '../swagger.json';
import Message from './helpers/validations/message';


const app = express();

app.use(logger);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('development enabled...');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
  res.render('index', { title: 'EPIC Mail APIs' });
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', Router);

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
