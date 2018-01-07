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
            <div key={temperature.id}>
              <table className="App-table">
  <tr>
    <th>Pin Number</th>
    <th>Sensor Number</th> 
    <th>Temperature(°C)</th>
  </tr>
  <tr>
    <td>4</td>
    <td>1</td> 
    <td><b>{temperature.temp41}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>2</td> 
    <td><b>{temperature.temp42}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>3</td> 
    <td><b>{temperature.temp43}</b></td>
  </tr>
  <tr>
    <td>4</td>
    <td>4</td> 
    <td><b>{temperature.temp44}</b></td>
  </tr>
  <tr>
    <td>17</td>
    <td>1</td> 
    <td><b>{temperature.temp17}</b></td>
  </tr>
  <tr>
    <td>22</td>
    <td>1</td> 
    <td><b>{temperature.temp22}</b></td>
  </tr>
</table>
            </div>
          )} 
        </p>
      </div>
    );
  }

}

export default App;
