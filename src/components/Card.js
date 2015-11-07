import React, { Component, PropTypes } from 'react';


export default class Card extends Component {
  static propTypes = {
    match: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    onAnswerCard: PropTypes.func.isRequired
  };

  render() {
    const { options, match, onAnswerCard } = this.props;

    return (
      <div>
        <h3>Match {match + 1}</h3>
        <button>Play</button>
        <ul>
          {
            options.map(({ movie }, index) => <li key={movie}>
              <input type="radio" name="movie" id={movie} onChange={() => onAnswerCard(index)} />
              <label htmlFor={movie}>{movie}</label>
            </li>)
          }
        </ul>
      </div>
    );
  }
}
