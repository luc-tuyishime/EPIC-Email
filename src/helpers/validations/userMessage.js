import Joi from 'joi';

const Message = {
  async validate(req, res) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      senderId: Joi.number().required(),
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
    return res.status(201).send({
      status: 201,
      data: value
    });
  },
};

export default Message;
