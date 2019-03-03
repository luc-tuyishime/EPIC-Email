export const apiGetUserDetail = (req, res, next) => {
  res.send(`Detail for user with id ${req.params.id}`);
};
