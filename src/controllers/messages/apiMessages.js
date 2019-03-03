import express from 'express';
import { apiGetMessages, apiGetUnreadMessages } from './apiGetMessages';
import { apiCreateMessage } from './apiCreatemessage';
import { apiGetMessagesDetail } from './apiGetMessageDetail';
import { apiDeleteMessage } from './apiDeleteMessage';
import { apiUpdateMessage } from './apiUpdateMessage';
import { jsonParser } from '../bodyParser';

const messageRouter = express.Router();

messageRouter.route('/')
  .get(apiGetMessages)
  .post(jsonParser, apiCreateMessage);

messageRouter.route('/unread')
  .get(apiGetUnreadMessages);

messageRouter.route('/:id')
  .get(apiGetMessagesDetail)
  .delete(apiDeleteMessage)
  .patch(jsonParser, apiUpdateMessage);


export default messageRouter;
