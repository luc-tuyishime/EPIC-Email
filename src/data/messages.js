const messages = [
  {
    id: 1,
    createdOn: '12/01/2018',
    subject: 'come to school',
    message: 'we here for the fellowship',
    senderId: 2,
    receiverId: 4,
    parentMessageId: 2,
    status: 'sent'
  },

  {
    id: 2,
    createdOn: '12/01/2018',
    subject: 'going to school',
    message: 'we here for the fellowship',
    senderId: 4,
    receiverId: 5,
    parentMessageId: 7,
    status: 'read'
  },
  {
    id: 3,
    createdOn: '12/01/2018',
    subject: 'back to school',
    message: 'we here for the fellowship',
    senderId: 5,
    receiverId: 8,
    parentMessageId: 9,
    status: 'draft'
  },
  {
    id: 4,
    createdOn: '12/01/2018',
    subject: 'andela fellowship',
    message: 'we here for the fellowship',
    senderId: 12,
    receiverId: 9,
    parentMessageId: 8,
    status: 'sent'
  }
];

export default messages;
