import messages from '../../model/messages';

export const GetUnreadMessages = (req, res) => {
  const select = messages.find(message => message.receiverId === parseInt(req.params.contactId, 10));
  const unread = messages.filter(message => message.status === 'sent');
  if (select && unread) {
    return res.status(200).send({
      status: 200,
      data: [select, unread]
    });
  }
  return res.status(404).send({
    status: 404,
    message: `The user with the id ${req.params.contactId} was not found`
  });
};
