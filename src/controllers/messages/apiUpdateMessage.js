import moment from 'moment';
import messages from '../../model/messages';

export const apiUpdateMessage = (req, res, next) => {
  const messageId = req.params.id;
  const messageIndex = messages.findIndex(message => message.id === parseInt(messageId, 10));
  if (messageIndex > -1) {
    const originalMessage = messages[messageIndex];
    const newMessage = {
      id: messageId,
      createdOn: moment().format('LL'),
      subject: req.body.subject || originalMessage.subject,
      message: req.body.message || originalMessage.message,
      parentMessageId: req.body.parentMessageId || originalMessage.parentMessageId,
      status: req.body.status || originalMessage.status
    };
    messages[messageIndex] = newMessage;
    return res.status(200).send({
      status: 200,
      data: [newMessage]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${messageId} was not found..`
  });
};
