import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LeaderboardActions from '../actions/leaderboard';


class LeaderboardPage extends Component {
  static propTypes = {
    leaderboard: PropTypes.object.isRequired,
    loadLeaderboard: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.loadLeaderboard();
  }

  onClickBackToHome() {
    this.context.history.pushState(null, '/');
  }

  renderLeaderboardResult(items) {
    if (!items.length) {
      return (
        <div>No results</div>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        {
          items.map(rank => (
            <tr>
              <td>{rank.username}</td>
              <td>{rank.points}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    );
  }

  render() {
    const { leaderboard } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.renderLeaderboardResult(leaderboard.items)}
        <button onClick={::this.onClickBackToHome}>Back to home</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    leaderboard: state.leaderboard
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(LeaderboardActions, dispatch);
}


export default connect((mapStateToProps), mapDispatchToProps)(LeaderboardPage);
