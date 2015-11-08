import axios from 'axios';
import { getRandomItems } from '../utils';


const COVER_SIZE = 'w185';


export default class TheMovieDBClient {
  constructor({ url, apiKey }) {
    this.url = url;
    this.apiKey = apiKey;
    this.theMovieDBConfig = null;
  }

  async getMovieByIMDBId(imdbId) {
    const result = await axios({
      method: 'GET',
      url: `${this.url}/3/movie/${imdbId}?api_key=${this.apiKey}`
    });

    const theMovieDBConfig = await this.getConfig();

    const movie = {
      title: result.data.title,
      cover: `${theMovieDBConfig.images.base_url}/${COVER_SIZE}/${result.data.poster_path}`
    };

    return movie;
  }

  async getSimilarMoviesByIMDBID(imdbId, amountItems) {
    const result = await axios({
      method: 'GET',
      url: `${this.url}/3/movie/${imdbId}/similar?api_key=${this.apiKey}`
    });

    const similarMovies = result.data.results;
    const randomMovies = getRandomItems(similarMovies, amountItems);
    const theMovieDBConfig = await this.getConfig();

    return randomMovies.map(movie => ({
      title: movie.title,
      cover: `${theMovieDBConfig.images.base_url}/${COVER_SIZE}/${movie.poster_path}`
    }));
  }

  async getConfig() {
    if (this.theMovieDBConfig) {
      return this.theMovieDBConfig;
    }

    const result = await axios({
      method: 'GET',
      url: `${this.url}/3/configuration?api_key=${this.apiKey}`
    });

    this.theMovieDBConfig = result.data;

    return this.theMovieDBConfig;
  }
}
