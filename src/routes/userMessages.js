import express from 'express';

import { GetMessages } from '../controllers/userMessages/getMessages';

import { sendMessageToContact } from '../controllers/userMessages/sendMessage';

import { GetUnreadMessages } from '../controllers/userMessages/getUnreadMessage';

import { jsonParser } from '../middleware/bodyParser';

import Message from '../helpers/validations/userMessage';

const inboxRouter = express.Router();

inboxRouter.route('/:contactId/unread')
  .get(GetUnreadMessages);

inboxRouter.route('/:contactId')
  .get(GetMessages)
  .post(jsonParser, Message.validate, sendMessageToContact);

export default inboxRouter;
