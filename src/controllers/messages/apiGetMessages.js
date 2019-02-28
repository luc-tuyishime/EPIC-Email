import messages from '../../data/messages';

export const apiGetMessages = (req, res, next) => {
  res.send(messages.map(message => message));
};
