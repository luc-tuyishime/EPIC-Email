import users from '../../model/users';
import { validateUser } from '../../helpers/validations/user';

export const apiUpdateUser = (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }

  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id === parseInt(userId, 10));
  if (userIndex > -1) {
    const originalUser = users[userIndex];

    const newUser = {
      id: userId,
      email: req.body.email || originalUser.email,
      firstname: req.body.firstname || originalUser.message,
      lastname: req.body.lastname || originalUser.lastname,
      password: req.body.password || originalUser.password
    };
    users[userIndex] = newUser;
    return res.status(201).send({
      status: 201,
      data: [newUser]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${userId} was not found`
  });
};
