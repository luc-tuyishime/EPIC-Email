import messages from '../../model/messages';

export const apiGetMessages = (req, res, next) => {
  res.send({
    status: 200,
    data: [messages]
  });
};

export const apiGetUnreadMessages = (req, res, next) => {
  const unread = messages.filter(message => message.status === 'sent');
  if (unread) {
    return res.status(200).send({
      status: 200,
      data: [unread]
    });
  }
  return res.status(404).send({
    status: 404,
    message: 'The unread message was not found'
  });
};

export const apiGetInboxMessages = (req, res, next) => {
  const read = messages.filter(message => message.status === 'read');
  if (read) {
    return res.status(200).send({
      status: 200,
      data: [read]
    });
  }
  return res.status(404).send({
    status: 404,
    message: 'The inbox message was not found'
  });
};
