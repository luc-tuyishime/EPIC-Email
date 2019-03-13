import moment from 'moment';
import contacts from '../../model/contacts';
import { validateContact } from '../../helpers/validations/contact';

export const createContacts = (req, res) => {
  const { error } = validateContact(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }
  const contact = {
    id: parseInt(contacts.length + 1, 10),
    createdOn: moment().format('LL'),
    email: req.body.email || '',
    firstname: req.body.firstname || '',
    lastname: req.body.lastname || 0,
  };
  contacts.push(contact);
  return res.send(({
    status: 201,
    data: [contact]
  }));
};
