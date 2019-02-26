import express from 'express';
import { hello } from './hello/hello';

const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome to the EPIC Email..');
});

hello();

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));

export default app;
