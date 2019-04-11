import Joi from 'joi';

const Message = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      senderId: Joi.number().required(),
      receiverId: Joi.number().required(),
      status: Joi.string().alphanum().valid('draft', 'sent', 'read')
        .required(),
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

  async validateUpdate(req, res, next) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      senderId: Joi.number().required(),
      receiverId: Joi.number().required(),
      status: Joi.string().alphanum().valid('draft', 'sent', 'read')
        .required(),
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

export default Message;
