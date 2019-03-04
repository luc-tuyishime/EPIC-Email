import express from 'express';

import { createContacts } from './apiCreateContacts';

import { getSpecificContacts, apiGetAllContacts } from './apiGetContacts';

import { jsonParser } from '../bodyParser';

const contactRouter = express.Router();

contactRouter.route('/:id')
  .get(getSpecificContacts);

contactRouter.route('/')
  .get(apiGetAllContacts)
  .post(jsonParser, createContacts);

export default contactRouter;
