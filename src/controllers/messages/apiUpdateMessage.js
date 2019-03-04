import moment from 'moment';
import messages from '../../model/messages';
import { validateMessage } from '../../helpers/validations/message';

export const apiUpdateMessage = (req, res, next) => {
  const { error } = validateMessage(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      error: error.details[0].message
    });
  }

  const messageId = req.params.id;
  const messageIndex = messages.findIndex(message => message.id === parseInt(messageId, 10));
  if (messageIndex > -1) {
    const originalMessage = messages[messageIndex];

    const newMessage = {
      id: messageId,
      createdOn: moment().format('LL'),
      subject: req.body.subject || originalMessage.subject,
      message: req.body.message || originalMessage.message,
      senderId: req.body.senderId || originalMessage.senderId,
      parentMessageId: req.body.parentMessageId || originalMessage.parentMessageId,
      status: req.body.status || originalMessage.status
    };
    messages[messageIndex] = newMessage;
    return res.status(201).send({
      status: 201,
      data: [newMessage]
    });
  }

  return res.status(404).send({
    status: 404,
    message: `The message with the id ${messageId} was not found`
  });
};
