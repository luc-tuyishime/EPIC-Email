import express from 'express';

import { GetMessages } from './getMessages';

import { sendMessageToContact } from './sendMessage';

import { jsonParser } from '../bodyParser';

const inboxRouter = express.Router();

inboxRouter.route('/:contactId')
  .get(GetMessages)
  .post(jsonParser, sendMessageToContact);

export default inboxRouter;
