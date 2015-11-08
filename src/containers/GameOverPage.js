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

  onClickBackToHome() {
    this.context.history.pushState(null, '/');
  }

  onAnswerCard(answer) {
    this.props.answerCard(answer);
  }

  render() {
    const { game } = this.props;

    console.log(game);

    return (
      <div>
        <h1>Gameover</h1>
        <div className="songs-container">
        {
            game.questions.map(game => {
              console.log(game);
            }

            )
        }
        </div>


        <button onClick={::this.onClickBackToHome}>Back to home</button>
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


export default connect((mapStateToProps), mapDispatchToProps)(GameOverPage);
