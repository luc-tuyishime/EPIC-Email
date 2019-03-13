import users from '../../model/users';

export const GetUserDetail = (req, res) => {
  const selectedUser = users.find(user => user.id === parseInt(req.params.id, 10));
  if (selectedUser) {
    return res.status(200).send({
      status: 200,
      data: [selectedUser]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The user with the id ${req.params.id} was not found`
  });
};
