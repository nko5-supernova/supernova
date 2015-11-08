import express from 'express';
import { leaderboard } from '../services/game';
import { leaderboard as presenter } from '../presenter/game';


const router = express.Router();


router.get('/', async function(req, res, next) {
  try {
    const data = await leaderboard();
    res.json(presenter(data));
  } catch (err) {
    next(err);
  }
});


export default router;
