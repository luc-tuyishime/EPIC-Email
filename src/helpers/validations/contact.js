import Joi from 'joi';

const Contact = {
  async validate(req, res) {
    const schema = Joi.object().keys({
      email: Joi.string().email({ minDomainAtoms: 2 }),
      firstname: Joi.string().alphanum().min(3).max(30)
        .required(),
      lastname: Joi.string().alphanum().min(3)
        .max(30)
        .required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    }
    return res.json(value);
  },
};

export default Contact;
