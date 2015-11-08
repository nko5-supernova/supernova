import React, { Component, PropTypes } from 'react';

export default class Score extends Component {
  static propTypes = {
    maxPoints: PropTypes.number.isRequired,
    fraction: PropTypes.number.isRequired
  }

  render() {
    const { maxPoints, fraction } = this.props;

    return (
      <p className="score-percentage">{fraction.toFixed(2)} x {maxPoints} points</p>
    );
  }
}
