import users from '../../model/users';

export const GetUsers = (req, res) => {
  res.send({
    status: 200,
    data: [users]
  });
};
