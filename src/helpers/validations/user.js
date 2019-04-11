import Joi from 'joi';

const User = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email({ minDomainAtoms: 2 }),
      firstname: Joi.string().alphanum().min(3).max(30)
        .required(),
      lastname: Joi.string().alphanum().min(3)
        .max(30)
        .required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    }
    next();
  },
};

export default User;
