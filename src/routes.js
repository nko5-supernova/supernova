import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  HomePage,
  GamePage,
  GameOverPage,
  LeaderboardPage
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/game" component={GamePage} />
    <Route path="/game/over" component={GameOverPage} />
    <Route path="/leaderboard" component={LeaderboardPage} />
  </Route>
);
