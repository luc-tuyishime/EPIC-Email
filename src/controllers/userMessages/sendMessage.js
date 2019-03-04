import moment from 'moment';
import contacts from '../../model/contacts';
import messages from '../../model/messages';
import { validateMessage } from '../../helpers/validations/message';

export const sendMessageToContact = (req, res, next) => {
  const { error } = validateMessage(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }

  const message = {
    id: parseInt(messages.length + 1, 10),
    receiverId: parseInt(req.params.contactId, 10) || '',
    createdOn: moment().format('LL'),
    subject: req.body.subject || '',
    message: req.body.message || '',
    senderId: req.body.senderId || '',
    parentMessageId: parseInt(messages.length + 1, 10),
    status: req.body.status || ''
  };

  const contact = contacts.find(c => c.id === parseInt(req.params.contactId, 10));

  if (!contact) {
    res.status(404).send({
      status: 404,
      error: `The contact with the id ${req.params.contactId} was not found`
    });
  }
  console.log(req.params.id);
  messages.push(message);
  return res.status(201).send(({
    status: 201,
    data: [message]
  }));
};
