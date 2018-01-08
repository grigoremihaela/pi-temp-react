import React, { Component } from 'react';
import logo from './logo-pi.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={temperatures: {}};
  }

  componentDidMount() {
    fetch('https://pi-temp-api.herokuapp.com/get/temperature')
    .then(function(response) { 
      // Convert to JSON
      console.log(response);
      return response.json();
    })
    .then(temperatures => { 
      this.setState({ temperatures });
      console.log(temperatures);
    });
  }

  render() {
    var nameObj = Object.assign({}, this.state.temperatures);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Silo Temperature Sensor</h1>
          <p>by Miha</p>
        </header>
        <p className="App-intro">
        <table className="App-table">
          <tr>
            <th>Pin</th>
            <th>Sensor</th> 
            <th>Temp.(°C)</th>
            <th>Time</th>
          </tr>
          {Object.keys(nameObj).map((index) => (
            <tr>
              <td>{nameObj[index].pin}</td>
              <td>{nameObj[index].numberSensor}</td> 
              <td>{nameObj[index].temp}</td>
              <td>{new Date(nameObj[index].created_at).toLocaleDateString()}</td> 
            </tr>
            ))}
          </table>
        </p>
      </div>
    );
  }

}

export default App;
