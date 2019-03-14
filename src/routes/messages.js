import express from 'express';
import { getMessages, getReadMessages, getSpecificMessagesForUser } from '../controllers/messages/getMessages';
import { getUnreadMessages } from '../controllers/messages/getMessages';
import { createMessage } from '../controllers/messages/createMessage';
import { getMessagesDetail } from '../controllers/messages/getMessageDetail';
import { deleteMessage } from '../controllers/messages/deleteMessage';
import { updateMessage } from '../controllers/messages/updateMessage';
import { sendMessageToContact } from '../controllers/messages/sendMessage';
import Message from '../helpers/validations/message';
import { jsonParser } from '../middleware/bodyParser';

const { validate, validateUpdate } = Message;

const messageRouter = express.Router();

messageRouter.route('/')
  .get(getMessages)
  .post(jsonParser, validate, createMessage);

messageRouter.route('/:contactId/unread')
  .get(getUnreadMessages);

messageRouter.route('/:contactId')
  .get(getMessages)
  .post(jsonParser, validate, sendMessageToContact);

messageRouter.route('/unread/messages')
  .get(getUnreadMessages);

messageRouter.route('/read/messages')
  .get(getReadMessages);

messageRouter.route('/:id/messages')
  .get(getSpecificMessagesForUser);

messageRouter.route('/message/:id')
  .get(getMessagesDetail)
  .delete(deleteMessage)
  .patch(jsonParser, validateUpdate, updateMessage);


export default messageRouter;
