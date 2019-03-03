export const apiDeleteUser = (req, res, next) => {
  res.send(`User deleted with id ${req.params.id}`);
};
