import { Router } from 'express';

const router = Router();

router.get('/tests', async (req, res) => {
  res.status(200).json('ok');
});

export default router;
