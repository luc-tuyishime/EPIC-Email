import express from 'express';
import { GetMessages, GetUnreadMessages, GetReadMessages } from '../controllers/messages/GetMessages';
import { CreateMessage } from '../controllers/messages/Createmessage';
import { GetMessagesDetail } from '../controllers/messages/GetMessageDetail';
import { DeleteMessage } from '../controllers/messages/DeleteMessage';
import { UpdateMessage } from '../controllers/messages/UpdateMessage';
import Message from '../helpers/validations/message';
import { jsonParser } from '../middleware/bodyParser';

const messageRouter = express.Router();

messageRouter.route('/')
  .get(GetMessages)
  .post(jsonParser, Message.validateCreate, CreateMessage);

messageRouter.route('/unread/messages')
  .get(GetUnreadMessages);

messageRouter.route('/read/messages')
  .get(GetReadMessages);

messageRouter.route('/message/:id')
  .get(GetMessagesDetail)
  .delete(DeleteMessage)
  .patch(jsonParser, Message.validateUpdate, UpdateMessage);


export default messageRouter;
