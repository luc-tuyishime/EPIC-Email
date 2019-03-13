import express from 'express';

import { getUsers } from '../controllers/users/GetUsers';

import { getUserDetail } from '../controllers/users/GetUserDetail';

import { addUser } from '../controllers/users/AddUser';

import { deleteUser } from '../controllers/users/DeleteUser';

import { updateUser } from '../controllers/users/UpdateUser';

import { jsonParser } from '../middleware/bodyParser';

import User from '../helpers/validations/user';

const userRouter = express.Router();

userRouter.route('/')
  .post(jsonParser, User.validate, addUser)
  .get(getUsers);

userRouter.route('/:id')
  .get(getUserDetail)
  .delete(deleteUser)
  .patch(jsonParser, User.validate, updateUser);


export default userRouter;
