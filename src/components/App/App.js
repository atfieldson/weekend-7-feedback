import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Content from '../Content/Content'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Thankyou from '../Thankyou/Thankyou'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route path="/2" component={Content} />
            <Route path="/3" component={Support} />
            <Route path="/4" component={Comments} />
            <Route path="/5" component={Thankyou} />
          
          </div>
        </Router>

        <br />
      </div>
    );
  }
}

export default App;
