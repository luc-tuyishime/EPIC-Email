import messages from '../../model/messages';
// import contacts from '../../model/contacts';

export const GetMessages = (req, res) => {
  const select = messages.find(message => message.receiverId === parseInt(req.params.contactId, 10));
  if (select) {
    return res.status(200).send({
      status: 200,
      data: [select]
    });
  }

  return res.status(404).send({
    status: 404,
    error: `The message for the contact with id ${req.params.contactId} is not found`
  });
};
