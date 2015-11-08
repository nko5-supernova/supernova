import TheMovieDBClient from './the-movie-db-client';
import config from '../config/config';


export default {
  theMovieDBClient: new TheMovieDBClient({
    url: config.theMovieDBAPIURL,
    apiKey: config.theMovieDBAPIKey
  })
};
