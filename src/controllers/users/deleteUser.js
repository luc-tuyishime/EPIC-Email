import users from '../../model/users';

export const deleteUser = (req, res) => {
  const userIndex = users.findIndex(user => user.id === parseInt(req.params.id, 10));
  if (userIndex > -1) {
    users.splice(userIndex);
    return res.status(200).send({
      status: 200,
      data: [{ message: 'User removed' }]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The user with the id ${req.params.id} was not found`
  });
};
