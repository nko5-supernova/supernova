import React, { Component, PropTypes } from 'react';

import soundCloudAudio from 'soundcloud-audio';

const clientId = 'ad83834cb84ee13bbaf65d15f6f7d1a2';

const style = {
  play: {
    margin: '0 auto',
    textAlign: 'center'
  }
};


export default class SoundPlayer extends Component {
  static propTypes = {
    audioActions: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    songURL: PropTypes.string.isRequired
  };

  componentDidMount() {
    const {audioActions, songURL} = this.props;

    this.loadSong(songURL);

    this.scPlayer.on('canplay', () => {
      audioActions.ready();
    });
  }

  componentWillReceiveProps(props) {
    const { songURL } = this.props;

    if (songURL !== props.songURL) {
      this.loadSong(props.songURL);
    }

    this.handlePlayback(props);
  }

  componentWillUnmount() {
    this.unloadSong();
  }

  loadSong(songURL) {
    const {audioActions} = this.props;

    audioActions.loadingAudio(songURL);

    this.scPlayer.resolve(songURL, track => {
      this.scPlayer.preload(track.stream_url);
    });
  }

  unloadSong() {
    this.scPlayer.pause();
    this.scPlayer = null;
  }

  handlePlayback(props) {
    if (!props.audio.isLoaded) {
      this.scPlayer.pause();
    }

    if (props.audio.isPlaying && !props.audio.isPaused) {
      this.scPlayer.play();
    }

    if (props.audio.isPaused) {
      this.scPlayer.pause();
    }
  }

  render() {
    const { isLoaded } = this.props.audio;

    return (
      <div style={style.play}>
        <button disabled={!isLoaded } onClick={::this.onTogglePlay}>
          {isLoaded ? 'Play!' : 'Loading...'}
        </button>
      </div>
    );
  }

  onTogglePlay() {
    const {audioActions, audio} = this.props;

    if (!audio.isPlaying) {
      audioActions.startPlaying();
      return;
    }

    if (audio.isPaused) {
      audioActions.resumePlaying();
    } else {
      audioActions.pausePlaying();
    }
  }

  scPlayer = soundCloudAudio(clientId);
}
