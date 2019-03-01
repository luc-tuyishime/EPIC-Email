import moment from 'moment';
import messages from '../../model/messages';

export const apiCreateMessage = (req, res, next) => {
  const newMessage = {
    id: parseInt(messages.length + 1, 10),
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
