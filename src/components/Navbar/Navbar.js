import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return(
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">KAJAFLASH</div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <div className="pt-navbar-heading">Simulator</div>
        </div>
      </nav>
    );
  }
}
