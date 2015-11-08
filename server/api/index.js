import express from 'express';


const app = express();


app.use('/game', require('./game-create'));
app.use('/game', require('./game-answer'));


export default app;
