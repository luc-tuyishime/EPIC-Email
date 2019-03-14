import users from '../../model/users';

export const updateUser = (req, res) => {
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
    return res.status(200).send({
      status: 200,
      data: [newUser]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${userId} was not found`
  });
};
