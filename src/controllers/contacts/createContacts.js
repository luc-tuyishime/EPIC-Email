import moment from 'moment';
import contacts from '../../model/contacts';

export const createContacts = (req, res) => {
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
