import messages from '../../model/messages';

export const GetMessagesDetail = (req, res) => {
  const selectedMessage = messages.find(message => message.id === parseInt(req.params.id, 10));
  if (selectedMessage) {
    return res.status(200).send({
      status: 200,
      data: [selectedMessage]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The message with the id ${req.params.id} was not found`
  });
};
