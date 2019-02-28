const messages = [
  {
    id: 1,
    createdOn: '12/01/2018',
    subject: 'come to school',
    message: 'we here for the fellowship',
    parentMessageId: 2,
    status: 'sent'
  },

  {
    id: 2,
    createdOn: '12/01/2018',
    subject: 'going to school',
    message: 'we here for the fellowship',
    parentMessageId: 3,
    status: 'read'
  },
  {
    id: 3,
    createdOn: '12/01/2018',
    subject: 'back to school',
    message: 'we here for the fellowship',
    parentMessageId: 3,
    status: 'draft'
  }
];

export default messages;
