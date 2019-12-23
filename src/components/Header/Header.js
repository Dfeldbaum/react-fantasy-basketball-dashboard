import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav-wrapper">
          <ul className="nav-wrapper__list">
            <li onClick={this.props.showContentFragments}>Content Fragments</li>
            <li onClick={this.props.showAbout}>About</li>
          </ul>

          <div className="nav-wrapper__name">
            <h1 onClick={this.props.showContentFragments}>Content Fragments</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
