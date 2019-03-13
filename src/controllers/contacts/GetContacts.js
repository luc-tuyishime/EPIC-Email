import contacts from '../../model/contacts';


export const GetAllContacts = (req, res) => {
  res.send({
    status: 200,
    data: [contacts]
  });
};

export const getSpecificContacts = (req, res) => {
  const selectedContact = contacts.find(message => message.id === parseInt(req.params.id, 10));
  if (selectedContact) {
    return res.status(200).send({
      status: 200,
      data: [selectedContact]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The message with the id ${req.params.id} was not found`
  });
};
