import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import SoundPlayer from './SoundPlayer';


const style = {
  list: {
    listStyle: 'none',
    display: 'block',
    width: '100%'
  },
  listItem: {
    float: 'left',
    cursor: 'pointer',
    width: '20%',
    padding: '0 1em',
    boxSizing: 'content-box',
    textAlign: 'center'
  },
  cover: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
};

export default class Card extends Component {
  static propTypes = {
    match: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    soundtrack: PropTypes.string.isRequired,
    onAnswerCard: PropTypes.func.isRequired,
    loadMovies: PropTypes.func.isRequired,
    audioActions: PropTypes.object.isRequired,
    turnActions: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    turn: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.loadMovies(this.props.options.map(option => option.movie));
  }

  componentWillReceiveProps(props) {
    const {movies, options, turn, turnActions, audio, audioActions} = props;

    const optionsChanged = this.props.options !== options;

    if (optionsChanged || !movies.isLoaded && !movies.isLoading) {
      this.props.loadMovies(options.map(option => option.movie));
    }

    if (turn.canStart && !turn.didStart) {
      turnActions.startTurn();
    }

    if (turn.didStart && !audio.isPlaying) {
      audioActions.startPlaying();
    }
  }

  render() {
    const { match, onAnswerCard, soundtrack, audioActions, audio, movies, turn } = this.props;

    const classes = {
      'match-container': true,
      'loading': !turn.canStart
    };

    return (
      <div className={classNames(classes)}>
        <h3>Match {match + 1}</h3>
        <div className="loading-wrapper">
          <p>Loading Movies...</p>
        </div>
        <div className="content-wrappper">
          <SoundPlayer songURL={soundtrack} audioActions={audioActions} audio={audio}/>
          <ul style={style.list}>
            {
              movies.movies &&
              movies.movies.map(( movie, index) =>
                  <li style={style.listItem} key={index} onClick={() => onAnswerCard(index)}>
                    <img style={style.cover} src={movie.Poster}/>
                    <p>{movie.Title}</p>
                  </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

require('./card.scss');
