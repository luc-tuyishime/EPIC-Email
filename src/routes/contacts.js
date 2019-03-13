import express from 'express';

import { createContacts } from '../controllers/contacts/CreateContacts';

import { getSpecificContacts, GetAllContacts } from '../controllers/contacts/GetContacts';

import { jsonParser } from '../middleware/bodyParser';

import Contact from '../helpers/validations/contact';

const contactRouter = express.Router();

contactRouter.route('/:id')
  .get(getSpecificContacts);

contactRouter.route('/')
  .get(GetAllContacts)
  .post(jsonParser, Contact.validate, createContacts);

export default contactRouter;
