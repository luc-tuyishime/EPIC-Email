import moment from 'moment';

export const createMessage = (req, res) => {
  const newMessage = {
    id: parseInt(messages.length + 1, 10),
    createdOn: moment().format('LL'),
    subject: req.body.subject || '',
    message: req.body.message || '',
    senderId: req.body.senderId || '',
    receiverId: req.body.receiverId || '',
    parentMessageId: parseInt(messages.length + 1, 10) || 0,
    status: req.body.status || ''
  };
  messages.push(newMessage);
  return res.send(({
    status: 201,
    data: [newMessage]
  }));
};
