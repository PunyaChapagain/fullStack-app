import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    name: ""
  }

  componentDidMount() {
    fetch("/api")
      .then(resp => resp.json())
      .then(data => {

        this.setState({ name: data.name })
      })

  }
  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


        </header>
        <h1>{this.state.name}</h1>
        <h1>The Name of Some Fruits</h1>



        <div>

        </div>
      </div>

    );
  }
}

export default App;
