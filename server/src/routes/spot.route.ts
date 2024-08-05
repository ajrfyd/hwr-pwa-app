import express from 'express';

const spotRouter = express.Router();

spotRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    result: [1, 2, 3, 4, 5],
    message: 'ok'
  });
});

export default spotRouter;
