import express from 'express';

import { createContacts } from '../controllers/contacts/CreateContacts';

import { getSpecificContacts, getAllContacts } from '../controllers/contacts/GetContacts';

import { jsonParser } from '../middleware/bodyParser';

import Contact from '../helpers/validations/contact';

const contactRouter = express.Router();

contactRouter.route('/')
  .get(getAllContacts)
  .post(jsonParser, Contact.validate, createContacts);
  
contactRouter.route('/:id')
  .get(getSpecificContacts);

export default contactRouter;
