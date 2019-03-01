import moment from 'moment';
import uuid from 'uuid';
import messages from '../../model/messages';

export const apiCreateMessage = (req, res, next) => {
  const newMessage = {
    id: uuid(),
    createdOn: moment().format('LL'),
    subject: req.body.subject || '',
    message: req.body.message || '',
    parentMessageId: req.body.parentMessageId || 0,
    status: req.body.status || ''
  };
  messages.push(newMessage);
  return res.send(({
    status: 201,
    data: [newMessage]
  }));
};
