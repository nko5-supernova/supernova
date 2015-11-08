import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/game';


class HomePage extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    gameActions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.questions) {
      this.context.history.pushState(null, '/game');
    }
  }

  onClickStartGame() {
    const username = this.refs.username.value;
    if (!username) {
      this.setState({ error: 'Missing username' });
      return;
    }
    this.props.gameActions.startGame(username);
  }

  onClickLeaderboard() {
    this.context.history.pushState(null, '/leaderboard');
  }

  render() {
    const state = this.state || {};
    let errorMessage = null;
    if (state.error) {
      errorMessage = <div>{state.error}</div>;
    }

    let startMessage = null;
    const isStartingGame = this.props.game.status === 'starting';
    if (isStartingGame) {
      startMessage = <div>Starting the game, please wait a bit.</div>;
    }

    return (
      <div>
        <div>
          <h1>Guess the movie</h1>
          <p>Prove you know the soundtrack of any movie. I dare you!</p>
          { errorMessage }
          { startMessage }
          <input type="text" placeholder="username" ref="username" />
          <button onClick={::this.onClickStartGame} disabled={isStartingGame}>Start</button>
          <button onClick={::this.onClickLeaderboard} disabled={isStartingGame}>Leaderboard</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    game: state.game
  };
}


function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(GameActions, dispatch)
  };
}


export default connect((mapStateToProps), mapDispatchToProps)(HomePage);
