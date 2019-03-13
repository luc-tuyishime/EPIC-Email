import express from 'express';

import { GetUsers } from '../controllers/users/GetUsers';

import { GetUserDetail } from '../controllers/users/GetUserDetail';

import { AddUser } from '../controllers/users/AddUser';

import { DeleteUser } from '../controllers/users/DeleteUser';

import { UpdateUser } from '../controllers/users/UpdateUser';

import { jsonParser } from '../middleware/bodyParser';

import User from '../helpers/validations/user';

const userRouter = express.Router();

userRouter.route('/')
  .post(jsonParser, User.validate, AddUser)
  .get(GetUsers);

userRouter.route('/:id')
  .get(GetUserDetail)
  .delete(DeleteUser)
  .patch(jsonParser, User.validate, UpdateUser);


export default userRouter;
