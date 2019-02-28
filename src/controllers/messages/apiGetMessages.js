import messages from '../../data/messages';

export const apiGetMessages = (req, res, next) => {
  res.send({
    status: 200,
    data: [messages]
  });
};
