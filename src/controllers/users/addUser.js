import users from '../../model/users';

export const addUser = (req, res) => {
  const newUser = {
    id: parseInt(users.length + 1, 10),
    email: req.body.email || '',
    firstname: req.body.firstname || '',
    lastname: req.body.lastname || '',
    password: req.body.password || ''
  };
  users.push(newUser);
  return res.send(({
    status: 201,
    data: [newUser]
  }));
};
