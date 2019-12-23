import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//importing to be used for react router 4
import App from './components/App';
import About from './components/About/About';
import ContentFragment from './components/ContentFragment/ContentFragment';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contentfragment" component={ContentFragment} />
    </div>

  </Router>,

  document.getElementById('root')
);
