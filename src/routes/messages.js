import express from 'express';
import { getMessages, getUnreadMessages, getReadMessages } from '../controllers/messages/GetMessages';
import { createMessage } from '../controllers/messages/Createmessage';
import { getMessagesDetail } from '../controllers/messages/GetMessageDetail';
import { deleteMessage } from '../controllers/messages/DeleteMessage';
import { updateMessage } from '../controllers/messages/UpdateMessage';
import Message from '../helpers/validations/message';
import { jsonParser } from '../middleware/bodyParser';

const messageRouter = express.Router();

messageRouter.route('/')
  .get(getMessages)
  .post(jsonParser, Message.validateCreate, createMessage);

messageRouter.route('/unread/messages')
  .get(getUnreadMessages);

messageRouter.route('/read/messages')
  .get(getReadMessages);

messageRouter.route('/message/:id')
  .get(getMessagesDetail)
  .delete(deleteMessage)
  .patch(jsonParser, Message.validateUpdate, updateMessage);


export default messageRouter;
