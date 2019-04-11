import express from 'express';

import { getUsers } from '../controllers/users/getUsers';

import { getUserDetail } from '../controllers/users/getUserDetail';

import { addUser } from '../controllers/users/addUser';

import { deleteUser } from '../controllers/users/deleteUser';

import { updateUser } from '../controllers/users/updateUser';

import { jsonParser } from '../middleware/bodyParser';

import User from '../helpers/validations/user';

const { validate } = User;

const userRouter = express.Router();

userRouter.route('/')
  .post(jsonParser, validate, addUser)
  .get(getUsers);

userRouter.route('/:id')
  .get(getUserDetail)
  .delete(deleteUser)
  .patch(jsonParser, validate, updateUser);


export default userRouter;
