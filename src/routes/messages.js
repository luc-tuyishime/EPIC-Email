import express from 'express';
import { apiGetMessages, apiGetUnreadMessages, apiGetInboxMessages } from '../controllers/messages/apiGetMessages';
import { apiCreateMessage } from '../controllers/messages/apiCreatemessage';
import { apiGetMessagesDetail } from '../controllers/messages/apiGetMessageDetail';
import { apiDeleteMessage } from '../controllers/messages/apiDeleteMessage';
import { apiUpdateMessage } from '../controllers/messages/apiUpdateMessage';
import { jsonParser } from '../controllers/bodyParser';

const messageRouter = express.Router();

messageRouter.route('/')
  .get(apiGetMessages)
  .post(jsonParser, apiCreateMessage);

messageRouter.route('/unread/messages')
  .get(apiGetUnreadMessages);

messageRouter.route('/read/messages')
  .get(apiGetInboxMessages);

messageRouter.route('/message/:id')
  .get(apiGetMessagesDetail)
  .delete(apiDeleteMessage)
  .patch(jsonParser, apiUpdateMessage);


export default messageRouter;
