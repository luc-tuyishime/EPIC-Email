import express from 'express';

import { getMessages } from '../controllers/userMessages/getMessages';

import { sendMessageToContact } from '../controllers/userMessages/sendMessage';

import { getUnreadMessages } from '../controllers/userMessages/getUnreadMessage';

import { jsonParser } from '../middleware/bodyParser';

import Message from '../helpers/validations/userMessage';

const inboxRouter = express.Router();

inboxRouter.route('/:contactId/unread')
  .get(getUnreadMessages);

inboxRouter.route('/:contactId')
  .get(getMessages)
  .post(jsonParser, Message.validate, sendMessageToContact);

export default inboxRouter;
