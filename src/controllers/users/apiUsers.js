import express from 'express';

import { apiGetUserDetail } from './apiGetUserDetail';

import { apiAddUser } from './apiAddUser';

import { apiDeleteUser } from './apiDeleteUser';

import { apiUpdateUser } from './apiUpdateUser';

const userRouter = express.Router();

userRouter.route('/:id')
  .get(apiGetUserDetail)
  .delete(apiDeleteUser)
  .patch(apiUpdateUser);

userRouter.route('/')
  .post(apiAddUser);


export default userRouter;
