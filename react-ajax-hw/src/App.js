import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import MainContainer from './MainContainer/MainContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }
  loggedIn = (data)=>{
    this.setState({
      logged: true,
      username: data
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer /> : <Login loggedIn={this.loggedIn} />}
        
      </div>
    );
  }
}

export default App;
