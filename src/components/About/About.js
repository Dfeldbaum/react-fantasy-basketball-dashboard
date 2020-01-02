import React, { Component } from 'react';

class About extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="about-section">
        <div className="item text-container">
          <h1 className="text-container__title">About</h1>
          <p className="text-container__copy">This React app was built from Create React App on Webpack to consume NBA data from the SportsRadar NBA API. To learn more please visit:</p>
          <br/>
          <p className="text-container__copy"><a href="https://github.com/Dfeldbaum/react-fantasy-basketball-dashboard" target="_blank" rel="noopener noreferrer">React Fantasy Basketball Dashboard Github</a></p>
        </div>
        <div class="item img-container">
          <img src="/../img/react-logo.png" alt="React Logo"/>
        </div>
      </div>
    );
  }
}

export default About;
