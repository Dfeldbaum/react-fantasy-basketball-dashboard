import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'
import ContentFragment from './ContentFragment/ContentFragment'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'content-fragment',
    }
  }

  showContentFragments(){
    this.setState({progress:"content-fragment"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress === 'content-fragment'){
      return <ContentFragment/>
    }

    if (progress === 'about'){
      return <About/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showContentFragments={this.showContentFragments.bind(this)} showAbout={this.showAbout.bind(this)}/>

          {this.PickView()} 

          <Footer/>
      </div>
    )
  }
}

export default App;
