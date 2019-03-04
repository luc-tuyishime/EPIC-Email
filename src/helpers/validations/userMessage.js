import Joi from 'joi';

export const validateUserMessage = (message) => {
  const schema = Joi.object().keys({
    subject: Joi.string().trim().min(3),
    message: Joi.string().trim().min(6),
    senderId: Joi.number().required(),
    status: Joi.string().alphanum().valid('draft', 'sent', 'read')
      .required(),
  });
  return Joi.validate(message, schema);
};
