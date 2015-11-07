import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../components/Card';
import * as CardActions from '../actions/counter';

import SoundPlayer from '../components/SoundPlayer'

class GamePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  onClickLeaveGame() {
    this.context.history.pushState(null, '/');
  }

  render() {
    return (
      <div>
        <h1>Guess the movie</h1>
        <Card />
        <SoundPlayer />
        <button onClick={::this.onClickLeaveGame}>Leave</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CardActions, dispatch);
}


export default connect((mapStateToProps), mapDispatchToProps)(GamePage);
