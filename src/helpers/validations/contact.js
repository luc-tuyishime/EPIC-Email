import Joi from 'joi';

export const validateContact = (message) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    firstname: Joi.string().alphanum().min(3).max(30)
      .required(),
    lastname: Joi.string().alphanum().min(3)
      .max(30)
      .required(),
  });
  return Joi.validate(message, schema);
};
