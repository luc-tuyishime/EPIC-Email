import users from '../../model/users';

export const getUsers = (req, res) => {
  res.send({
    status: 200,
    data: [users]
  });
};
