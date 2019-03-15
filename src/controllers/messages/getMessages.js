export const getMessages = (req, res) => {
  res.send({
    status: 200,
    data: [messages]
  });
};

export const getUnreadMessages = (req, res) => {
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

export const getReadMessages = (req, res) => {
  const read = messages.filter(message => message.status === 'read');
  if (read.length > 0) {
    return res.status(200).send({
      status: 200,
      data: [read]
    });
  }
  return res.status(404).send({
    status: 404,
    message: 'No message found'
  });
};


export const getSpecificMessagesForUser = (req, res) => {
  const select = messages.find(message => message.receiverId === parseInt(req.params.contactId, 10));
  if (select.length > -1) {
    return res.status(200).send({
      status: 200,
      data: [select]
    });
  }

  return res.status(404).send({
    status: 404,
    error: `The message for the contact with id ${req.params.contactId} is not found`
  });
};
