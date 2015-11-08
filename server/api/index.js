import express from 'express';


const app = express();


app.use('/game', require('./game-create'));
app.use('/game', require('./game-answer'));
app.use('/leaderboard', require('./leaderboard-list'));


export default app;
