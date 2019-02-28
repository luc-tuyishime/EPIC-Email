import messages from '../../data/messages';

export const apiGetMessagesDetail = (req, res, next) => {
  const messageId = req.params.id;
  const selectedMessage = messages.find(message => message.id === parseInt(messageId, 10));
  if (selectedMessage) {
    return res.send({
      status: 200,
      data: [selectedMessage]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The message with the id ${messageId} was not found`
  });
};
