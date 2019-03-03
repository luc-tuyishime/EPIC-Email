import users from '../../model/users';

export const apiDeleteUser = (req, res, next) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id === parseInt(userId, 10));
  if (userIndex > -1) {
    users.splice(userIndex);
    return res.status(200).send({
      status: 200,
      data: [{ message: 'User removed' }]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The user with the id ${userId} was not found`
  });
};
