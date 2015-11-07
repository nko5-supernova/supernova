import React, { Component, Proptypes } from 'react';

// import { PlayButton, Icons } from 'react-soundplayer/components';
// const { SoundCloudLogoSVG } = Icons;

import SoundCloudAudio from 'soundcloud-audio';

const client_id = "ad83834cb84ee13bbaf65d15f6f7d1a2";

export default class SoundPlayer extends Component {
  static propTypes = {
    songURL: React.PropTypes.string.isRequired
  };

  scPlayer = SoundCloudAudio(client_id);

  componentDidMount() {
    // this.scPlayer.resolve(this.props.songURL, track => {
    //   console.log(track);
    //   this.setState({isLoaded: true});
    // });
  }

  componentWillReceiveProps(props) {
    console.log(props, this.props);
  }

  render () {
    const { isLoaded } = false;

    return (
      <div>
        <button disabled={!isLoaded } onClick={::this.onTogglePlay}>
          {isLoaded ? "Play!" : "Loading..."}
        </button>
      </div>
    )
  }

  onTogglePlay() {
    const { isPlaying } = this.state;

    if(isPlaying) {
      this.scPlayer.pause();
    }else {
      this.scPlayer.play();
    }

    this.setState({isPlaying: !isPlaying});
  }
}

/*
<PlayButton
  playing={true}
  onTogglePlay={::this.onTogglePlay}
  soundCloudAudio={SCAudio}
/>
*/

// <PlayButton
//     className={String}
//     playing={Boolean}
//     seeking={Boolean}
//     seekingIcon={ReactElement}
//     onTogglePlay={Function}
//     soundCloudAudio={instanceof SoundCloudAudio}
// />
