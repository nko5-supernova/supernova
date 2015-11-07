import React, { Component, PropTypes } from 'react';


export default class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  onClickStartGame(event) {
    event.preventDefault();
    this.context.history.pushState(null, '/game');
  }

  render() {
    return (
      <div>
        <h1>Guess the movie</h1>
        <p>Prove you know the soundtrack of any movie. I dare you!</p>
        <a href="#" onClick={::this.onClickStartGame}>Start</a>
      </div>
    );
  }
}


export default HomePage;
