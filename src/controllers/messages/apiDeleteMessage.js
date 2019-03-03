import messages from '../../model/messages';


export const apiDeleteMessage = (req, res, next) => {
  const messageIndex = messages.findIndex(message => message.id === parseInt(req.params.id, 10));
  if (messageIndex > -1) {
    messages.splice(messageIndex);
    return res.status(200).send({
      status: 200,
      data: [{ message: 'Message removed' }]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${req.params.id} was not found`
  });
};
