import Joi from 'joi';

export const validateUser = (user) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    firstname: Joi.string().alphanum().min(3).max(30)
      .required(),
    lastname: Joi.string().alphanum().min(3)
      .max(30)
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  });
  return Joi.validate(user, schema);
};
