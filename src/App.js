import React, { Component } from 'react';
import logo from './logo-pi.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={temperatures: []};
  }

  componentDidMount() {
    fetch('/get/temperature')
    .then(res => {
      return res.json()
    })
    .then(temperatures => { 
      this.setState({ temperatures })
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Silo Temperature Sensor</h1>
          <p>by Miha</p>
        </header>
        <p className="App-intro">
          {this.state.temperatures.map(temperature =>
            <div key={temperature.id}>The last read temperature is: <b>{temperature.temp}</b>°C.</div>
          )} 
        </p>
      </div>
    );
  }

}

export default App;
