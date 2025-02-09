import express from 'express';

const router = express.Router();

router.get('/testComment', (req, res) => {
  res.status(200).send('Comment router works fine!');
});

export default router;
