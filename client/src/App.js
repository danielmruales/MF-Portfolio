import React, { Component } from 'react';
import Home from './Home/Home.js'
import Innovation from './Innovation/Innovation.js'
import About from './About/About.js'
import Contact from './Contact/Contact.js'
import Education from './Education/Education.js'
import Experiences from './Experiences/Experiences.js'
import Impact from './Impact/Impact.js'
import Footer from './Footer/Footer.js'
import {Switch, Route} from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/innovation' component={Innovation}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/education' component={Education}/>
          <Route path='/experiences' component={Experiences}/>
          <Route path='/impact' component={Impact}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
