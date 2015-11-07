import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../components/Card';
import * as GameActions from '../actions/game';

import SoundPlayer from '../components/SoundPlayer'

class GamePage extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    startGame: PropTypes.func.isRequired,
    answerCard: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.onInitGame(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onInitGame(nextProps);
  }

  onInitGame(props) {
    if (!props.game.isPlaying) {
      props.startGame();
      return;
    }

    if (props.game.isOver) {
      this.context.history.pushState(null, '/game/over');
    }
  }

  onClickLeaveGame() {
    this.context.history.pushState(null, '/');
  }

  onAnswerCard(answer) {
    this.props.answerCard(answer);
  }

  render() {
    const { game } = this.props;
    const currentCard = (game.cards && game.cards[game.currentMatch]);

    return (
      <div>
        <h1>Guess the movie</h1>
        {
          currentCard
          &&
          <Card options={currentCard.options}
            match={game.currentMatch}
            onAnswerCard={::this.onAnswerCard} />
        }
        <SoundPlayer />
        <button onClick={::this.onClickLeaveGame}>Leave</button>
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
  return bindActionCreators(GameActions, dispatch);
}


export default connect((mapStateToProps), mapDispatchToProps)(GamePage);
