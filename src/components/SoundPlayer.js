import React, { Component, Proptypes } from 'react';

// import { PlayButton, Icons } from 'react-soundplayer/components';
// const { SoundCloudLogoSVG } = Icons;

import SoundCloudAudio from 'soundcloud-audio';

const client_id = "ad83834cb84ee13bbaf65d15f6f7d1a2";

export default class SoundPlayer extends Component {
  static propTypes = {
    audioActions: React.PropTypes.object.isRequired,
    songURL: React.PropTypes.string.isRequired
  };

  scPlayer = SoundCloudAudio(client_id);

  componentDidMount() {
    const {audioActions, songURL} = this.props;

    this.loadSong(songURL);

    this.scPlayer.on('canplay', () => {
      audioActions.ready();
    })
  }

  componentWillReceiveProps(props) {
    const { songURL } = this.props;

    if(songURL != props.songURL) {
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
    if(!props.audio.isLoaded) {
      this.scPlayer.pause();
    }

    if(props.audio.isPlaying && !props.audio.isPaused) {
      this.scPlayer.play();
    }

    if(props.audio.isPaused) {
      this.scPlayer.pause();
    }
  }

  render () {
    const { isLoaded } = this.props.audio;

    return (
      <div style={style.play}>
        <button disabled={!isLoaded } onClick={::this.onTogglePlay}>
          {isLoaded ? "Play!" : "Loading..."}
        </button>
      </div>
    )
  }

  onTogglePlay() {
    const {audioActions, audio} = this.props;

    if(!audio.isPlaying) {
      audioActions.startPlaying();
      return;
    }

    if(audio.isPaused) {
      audioActions.resumePlaying();
    } else {
      audioActions.pausePlaying();
    }
  }
}

const style = {
  play:{
    margin: '0 auto',
    textAlign: 'center'
  }
}
