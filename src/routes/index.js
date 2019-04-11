import express from 'express';

import userRouter from './users';
import messageRouter from './messages';
import contactRouter from './contacts';

const Router = express.Router();

Router.use('/messages', messageRouter);
Router.use('/users', userRouter);
Router.use('/contacts', contactRouter);

export default Router;
