import express from 'express';
import { answer } from '../services/game';


const router = express.Router();


router.post('/:id/answer', async function(req, res, next) {
  try {
    const result = await answer(req.params.id, req.body);
    if (result === null) {
      return res.sendStatus(404);
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
});


export default router;
