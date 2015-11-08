export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';

export function loadMovies(moviesIds) {
  return dispatch => {
    dispatch({ type: LOAD_MOVIES, moviesIds });

    Promise.all(moviesIds.map( id =>
      fetch(`http://www.omdbapi.com/?i=${id}&plot=short&r=json`)
      .then(response => response.json())
    ))
    .then(movies => {
      dispatch({ type: LOAD_MOVIES_SUCCESS, movies });
    });
  };
}
