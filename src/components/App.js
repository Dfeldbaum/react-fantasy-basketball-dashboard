import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './About/About'
import Dashboard from './Dashboard/Dashboard'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'dashboard',
    }
  }

  showDashboard(){
    this.setState({progress:"dashboard"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress === 'dashboard'){
      return <Dashboard/>
    }

    if (progress === 'about'){
      return <About/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showDashboard={this.showDashboard.bind(this)} showAbout={this.showAbout.bind(this)}/>

          {this.PickView()} 

          <Footer/>
      </div>
    )
  }
}

export default App;
