import React, { Component, Proptypes } from 'react';

const soundcloud = require('../vendor/soundcloud.js');

export default class SoundPlayer extends Component {
  componentDidMount() {
    console.log(soundcloud);
  }

  render () {
    return <p>Soundcloud</p>
  }
}
