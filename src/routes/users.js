import express from 'express';

import { apiGetUsers } from '../controllers/users/apiGetUsers';

import { apiGetUserDetail } from '../controllers/users/apiGetUserDetail';

import { apiAddUser } from '../controllers/users/apiAddUser';

import { apiDeleteUser } from '../controllers/users/apiDeleteUser';

import { apiUpdateUser } from '../controllers/users/apiUpdateUser';

import { jsonParser } from '../controllers/bodyParser';

const userRouter = express.Router();

userRouter.route('/')
  .post(jsonParser, apiAddUser)
  .get(apiGetUsers);

userRouter.route('/:id')
  .get(apiGetUserDetail)
  .delete(apiDeleteUser)
  .patch(jsonParser, apiUpdateUser);


export default userRouter;
