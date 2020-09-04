import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Emailbuilder from './Emailbuilder';
import Contact from './Contact';
import TestMenu from './TestMenu';
//import TestBoot from './TestBoot';
import Emailbuilderit from './Emailbuilder-it';
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
    <Router>
        <div>
          <h2>YiS - Email builder</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
             <li><Link to={'/emailbuilder'} className="nav-link">Email Builder</Link></li>
            <li><Link to={'/emailbuilder-template-ita'} className="nav-link">Email Builder - Template ITA</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/emailbuilder' component={Emailbuilder} />
              <Route path='/emailbuilder-template-ita' component={Emailbuilderit} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/testmenu' component={TestMenu} />
          </Switch>
        </div>
      </Router>
      </Layout>
    );
  }
}

export default App;