import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/game';


class GameOverPage extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    startGame: PropTypes.func.isRequired,
    answerCard: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  onClickBackToHome(event) {
    event.preventDefault();
    this.context.history.pushState(null, '/');
  }

  onClickLeaderboard(event) {
    event.preventDefault();
    this.context.history.pushState(null, '/leaderboard');
  }

  onAnswerCard(answer) {
    this.props.answerCard(answer);
  }

  render() {
    const { game } = this.props;
    const questions = game.questions;

    return (
      <div className="game-over">
        <h1>Gameover</h1>
        <div className="songs-container">
        <p>Enjoy the songs again!</p>
        {
          questions &&
          questions.map((question, index) =>
              <li key={index}>
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=${question.soundtrack}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`}></iframe>
              </li>
          )
        }
        </div>


        <div>
          <a href="#" onClick={::this.onClickBackToHome}>Back to home</a>
          <span style={{margin: '0 1em'}}>|</span>
          <a href="#" onClick={::this.onClickLeaderboard}>Leaderboard</a>
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
  return bindActionCreators(GameActions, dispatch);
}

require('./gameOver.scss');

export default connect((mapStateToProps), mapDispatchToProps)(GameOverPage);
