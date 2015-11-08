import express from 'express';
import { create } from '../services/game';
import { detail } from '../presenter/game';


const router = express.Router();


router.post('/', async function(req, res, next) {
  try {
    const result = await create(req.body);
    res.json(detail(result));
  } catch (err) {
    next(err);
  }
});


export default router;
