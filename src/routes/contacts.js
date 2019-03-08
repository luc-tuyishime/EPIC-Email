import express from 'express';

import { createContacts } from '../controllers/contacts/apiCreateContacts';

import { getSpecificContacts, apiGetAllContacts } from '../controllers/contacts/apiGetContacts';

import { jsonParser } from '../controllers/bodyParser';

const contactRouter = express.Router();

contactRouter.route('/:id')
  .get(getSpecificContacts);

contactRouter.route('/')
  .get(apiGetAllContacts)
  .post(jsonParser, createContacts);

export default contactRouter;
