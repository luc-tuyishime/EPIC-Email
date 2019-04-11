import express from 'express';

import { createContacts } from '../controllers/contacts/createContacts';

import { getSpecificContacts, getAllContacts } from '../controllers/contacts/getContacts';

import { jsonParser } from '../middleware/bodyParser';

import Contact from '../helpers/validations/contact';

const { validate } = Contact;

const contactRouter = express.Router();

contactRouter.route('/')
  .get(getAllContacts)
  .post(jsonParser, validate, createContacts);

contactRouter.route('/:id')
  .get(getSpecificContacts);

export default contactRouter;
