import React, { Component, PropTypes } from 'react';

import soundCloudAudio from 'soundcloud-audio';

const clientId = 'ad83834cb84ee13bbaf65d15f6f7d1a2';

const style = {
  play: {
    margin: '0 auto',
    textAlign: 'center'
  }
};

let tracker = null;

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
      audioActions.ready(this.scPlayer.duration);
    });

    tracker = setInterval(() => audioActions.setCurrentTime(this.scPlayer.audio.currentTime), 200);
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
    clearInterval(tracker);
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
    const { audio } = props;

    if (!audio.isLoaded) {
      this.scPlayer.pause();
    }

    if (audio.isPlaying && !audio.isPaused) {
      this.scPlayer.play();
    }

    if (audio.isPaused) {
      this.scPlayer.pause();
    }

    this.scPlayer.audio.muted = audio.isMuted;
  }

  render() {
    const { isLoaded, isMuted } = this.props.audio;

    return (
      <div style={style.play}>
        <button disabled={!isLoaded } onClick={::this.onToggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    );
  }

  onToggleMute() {
    const {audioActions, audio} = this.props;

    if (audio.isMuted) {
      audioActions.unmute();
    }else {
      audioActions.mute();
    }
  }

  scPlayer = soundCloudAudio(clientId);
}
