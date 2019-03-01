import messages from '../../model/messages';

export const apiDeleteMessage = (req, res, next) => {
  const messageId = req.params.id;
  const messageIndex = messages.findIndex(message => message.id === parseInt(messageId, 10));
  if (messageIndex > -1) {
    messages.splice(messageIndex);
    return res.send({
      status: 200,
      message: 'Message removed'
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${messageId} was not found`
  });
};
