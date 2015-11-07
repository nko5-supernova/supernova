import React, { Component, PropTypes } from 'react';

import SoundPlayer from './SoundPlayer'

export default class Card extends Component {
  static propTypes = {
    match: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    soundtrack: PropTypes.string.isRequired,
    onAnswerCard: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadMovies(this.props.options.map(option => option.movie));
  }

  componentWillReceiveProps(props) {
    const {movies, options} = props

    const optionsChanged = this.props.options != options;

    if(optionsChanged || !movies.isLoaded && !movies.isLoading) {
      this.props.loadMovies(options.map(option => option.movie));
    }
  }

  render() {
    const {
      match, onAnswerCard,
      soundtrack, audioActions, audio,
      options, movies
    } = this.props;

    return (
      <div>
        <h3>Match {match + 1}</h3>
        <SoundPlayer songURL={soundtrack} audioActions={audioActions} audio={audio}/>
        <ul style={style.list}>
          {
            !movies.isLoaded ? <p>Loading Movies...</p> :
            movies.movies.map(( movie, index) =>
                <li style={style.listItem} key={index} onClick={() => onAnswerCard(index)}>
                  <img style={style.cover} src={movie.Poster}/>
                  <p>{movie.Title}</p>
                </li>
            )
          }
        </ul>
      </div>
    );
  }


}

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
}


// <li key={index}>
//   <input type="radio" name="movie" id={movie.imdbID} onChange={() => onAnswerCard(index)} />
//   <label htmlFor={movie.imdbID}>{movie.Title}</label>
// </li>)
