import express from 'express';

import { GetMessages } from '../controllers/userMessages/getMessages';

import { sendMessageToContact } from '../controllers/userMessages/sendMessage';

import { GetUnreadMessages } from '../controllers/userMessages/getUnreadMessage';

import { jsonParser } from '../controllers/bodyParser';

const inboxRouter = express.Router();

inboxRouter.route('/:contactId/unread')
  .get(GetUnreadMessages);

inboxRouter.route('/:contactId')
  .get(GetMessages)
  .post(jsonParser, sendMessageToContact);

export default inboxRouter;
