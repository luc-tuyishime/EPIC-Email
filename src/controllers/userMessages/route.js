import express from 'express';

import { GetMessages } from './getMessages';

import { sendMessageToContact } from './sendMessage';

import { GetUnreadMessages } from './getUnreadMessage';

import { jsonParser } from '../bodyParser';

const inboxRouter = express.Router();

inboxRouter.route('/:contactId/unread')
  .get(GetUnreadMessages);

inboxRouter.route('/:contactId')
  .get(GetMessages)
  .post(jsonParser, sendMessageToContact);

export default inboxRouter;
