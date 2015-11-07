import express from 'express';


const app = express();


app.use('/game', require('./game-create'));


export default app;
