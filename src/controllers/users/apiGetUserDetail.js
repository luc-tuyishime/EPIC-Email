import users from '../../model/users';

export const apiGetUserDetail = (req, res, next) => {
  const userId = req.params.id;
  const selectedUser = users.find(user => user.id === parseInt(userId, 10));
  if (selectedUser) {
    return res.status(200).send({
      status: 200,
      data: [selectedUser]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The user with the id ${userId} was not found`
  });
};
