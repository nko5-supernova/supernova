import React, { Component, PropTypes } from 'react';

import SoundPlayer from './SoundPlayer'

export default class Card extends Component {
  static propTypes = {
    match: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    soundtrack: PropTypes.string.isRequired,
    onAnswerCard: PropTypes.func.isRequired
  };

  render() {
    const { soundtrack, options, match, onAnswerCard, audioActions, audio } = this.props;

    return (
      <div>
        <h3>Match {match + 1}</h3>
        <SoundPlayer songURL={soundtrack} audioActions={audioActions} audio={audio}/>
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
