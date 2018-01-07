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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Silo Temperature Sensor</h1>
          <p>by Miha</p>
        </header>
        <p className="App-intro">
        {this.state.temperatures.temp41}
             <table className="App-table">
  <tr>
    <th>Pin</th>
    <th>Sensor</th> 
    <th>Temperature(°C)</th>
  </tr>
  <tr>
    <td>4</td>
    <td>1</td> 
    <td><b>{this.state.temperatures.temp41}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>2</td> 
    <td><b>{this.state.temperatures.temp42}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>3</td> 
    <td><b>{this.state.temperatures.temp43}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>4</td> 
    <td><b>{this.state.temperatures.temp44}</b></td>
  </tr>
  <tr>
    <td>17</td>
    <td>1</td> 
    <td><b>{this.state.temperatures.temp17}</b></td>
  </tr>
  <tr>
    <td>22</td>
    <td>1</td> 
    <td><b>{this.state.temperatures.temp22}</b></td>
  </tr>
</table>
        </p>
      </div>
    );
  }

}

export default App;
