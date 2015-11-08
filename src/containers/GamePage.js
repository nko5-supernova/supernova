import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classNames from 'classnames';

import Card from '../components/Card';
import * as GameActions from '../actions/game';
import * as AudioActions from '../actions/audio';

const style = {
  cardContainer: {
    overflow: 'auto'
  },
  leave: {
    display: 'block'
  }
};


class GamePage extends Component {
  static propTypes = {
    audio: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
    audioActions: PropTypes.object.isRequired,
    gameActions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.gameActions.startGame();
  }

  componentWillReceiveProps(nextProps) {
    this.handleGameEvents(nextProps);

    if (this.props.game.correctAnswer === -1 && nextProps.game.correctAnswer !== -1) {
      setTimeout(() => this.props.gameActions.nextCard(), 2000);
    }

    if (nextProps.isFinished) {
      this.props.gameActions.nextCard();
    }
  }

  onClickLeaveGame() {
    this.context.history.pushState(null, '/');
  }

  onAnswerCard(answer) {
    const { game, audio } = this.props;

    if (game.correctAnswer === -1) {
      const fraction = 1 - (audio.currentTime / audio.duration);

      this.props.gameActions.answerCard(answer, fraction);
    }
  }

  handleGameEvents(props) {
    if (props.game.isOver) {
      this.context.history.pushState(null, '/game/over');
    }
  }

  render() {
    const { game, audio, audioActions } = this.props;
    const currentCard = (game.questions && game.questions[game.currentMatch]);

    const classes = classNames({
      'game-page': true,
      'checking-answer': game.checkingAnswer
    });

    return (
      <div className={classes}>
      <h1>Guess the movie</h1>
      {
        currentCard
        &&
        <div className="card-container" style={style.cardContainer}>
          <Card
            options={currentCard.options}
            soundtrack={currentCard.soundtrack}
            audio={audio}
            audioActions={audioActions}
            match={game.currentMatch}
            correctAnswer={game.correctAnswer}
            onAnswerCard={::this.onAnswerCard} />
            <div className="loading-modal">
              <p>Checking answers...</p>
            </div>
        </div>
      }
      <button style={style.leave} onClick={::this.onClickLeaveGame}>Leave</button>
    </div>
    );
  }
}

require('./gamePage.scss');

function mapStateToProps(state) {
  return {
    game: state.game,
    audio: state.audio
  };
}


function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(GameActions, dispatch),
    audioActions: bindActionCreators(AudioActions, dispatch)
  };
}


export default connect((mapStateToProps), mapDispatchToProps)(GamePage);
