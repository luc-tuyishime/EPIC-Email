import users from '../../model/users';
import { validateUser } from '../../helpers/validations/user';

export const AddUser = (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }
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
