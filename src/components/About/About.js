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
          <p className="text-container__copy">This React app was built from "Create React App" on Webpack to consume API data served from an Adobe Experience Manager (AEM) provided endpoint. To learn more, please visit the following blog posts:</p>
          <br/>
          <p className="text-container__copy"><a href="https://engineering.icf.com/aem-content-fragments-in-the-wild/" target="_blank" rel="noopener noreferrer">AEM Content Fragments in the Wild</a></p>
          <p className="text-container__copy"><a href="https://engineering.icf.com/aem-content-fragments-as-an-api/" target="_blank" rel="noopener noreferrer">AEM Content Fragments as an API</a></p>
          <p className="text-container__copy"><a href="https://engineering.icf.com/using-a-content-fragment-api-in-react" target="_blank" rel="noopener noreferrer">Using a Content Fragment API in React</a></p>
        </div>
        <div class="item img-container">
          <img src="/../img/react-logo.png" alt="React Logo"/>
        </div>
      </div>
    );
  }
}

export default About;
