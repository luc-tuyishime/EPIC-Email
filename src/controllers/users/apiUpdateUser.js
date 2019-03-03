export const apiUpdateUser = (req, res, next) => {
  res.send(`Data updated for user with id ${req.params.id}`);
};
