import express from 'express';

const router = express.Router();

router.get('/testPost', (req, res) => {
  res.status(200).send('Post router works fine!');
});

export default router;
