import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LeaderboardActions from '../actions/leaderboard';


require('./LeaderboardPage.scss');


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

  onClickBackToHome(event) {
    event.preventDefault();
    this.context.history.pushState(null, '/');
  }

  renderLeaderboardResult(items) {
    if (!items.length) {
      return (
        <div>No results</div>
      );
    }

    return (
      <div className="leaderboard">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Games</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
          {
            items.map(rank => (
              <tr key={rank.username}>
                <td>{rank.username}</td>
                <td>{rank.games}</td>
                <td>{Math.round(rank.points)}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { leaderboard } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        {this.renderLeaderboardResult(leaderboard.items)}
        <a href="#" onClick={::this.onClickBackToHome}>Back to home</a>
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
