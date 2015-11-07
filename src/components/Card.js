import React, { Component } from 'react';

import SoundPlayer from './SoundPlayer'

export default class Counter extends Component {
  render() {
    return (
      <div>
        <SoundPlayer />
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
          <li>Movie 3</li>
          <li>Movie 4</li>
        </ul>
      </div>
    );
  }
}
