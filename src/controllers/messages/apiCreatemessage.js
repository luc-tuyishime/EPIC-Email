import moment from 'moment';
import messages from '../../model/messages';
import { validateMessage } from '../../helpers/validations/message';

export const apiCreateMessage = (req, res, next) => {
  const { error } = validateMessage(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }
  const newMessage = {
    id: parseInt(messages.length + 1, 10),
    createdOn: moment().format('LL'),
    subject: req.body.subject || '',
    message: req.body.message || '',
    senderId: req.body.senderId || '',
    receiverId: req.body.receiverId || '',
    parentMessageId: req.body.parentMessageId || 0,
    status: req.body.status || ''
  };
  messages.push(newMessage);
  return res.send(({
    status: 201,
    data: [newMessage]
  }));
};
