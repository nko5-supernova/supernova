import React, { Component, PropTypes } from 'react';


export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div className="app">
        {/* this will render the child routes */}
        <div className="content-app">
          {this.props.children}
        </div>

        <footer>
          <iframe src="http://nodeknockout.com/iframe/supernova"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              width="115"
              height="25">
          </iframe>
          <div className="thanks">
            <a href="https://soundcloud.com/" target="_blank">
              <img src="https://developers.soundcloud.com/assets/logo_black-8c4cb46bf63fda8936f9a4d967416dc6.png" />
            </a>
            <a href="https://www.themoviedb.org/" target="_blank">
              <img className="themoviedb" src="https://assets.tmdb.org/images/logos/var_4_0_tmdb-logo-1Line-Blk-Bree.svg" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
