import express from 'express';

import { apiGetUsers } from './apiGetUsers';

import { apiGetUserDetail } from './apiGetUserDetail';

import { apiAddUser } from './apiAddUser';

import { apiDeleteUser } from './apiDeleteUser';

import { apiUpdateUser } from './apiUpdateUser';

import { jsonParser } from '../bodyParser';

const userRouter = express.Router();

userRouter.route('/')
  .post(jsonParser, apiAddUser)
  .get(apiGetUsers);

userRouter.route('/:id')
  .get(apiGetUserDetail)
  .delete(apiDeleteUser)
  .patch(jsonParser, apiUpdateUser);


export default userRouter;
