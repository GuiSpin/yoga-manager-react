import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainNav from './Nav/MainNav'
import CadastrarAlunoForm from './Forms/CadastrarAlunoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MainNav></MainNav>

        <CadastrarAlunoForm></CadastrarAlunoForm>
      </div>
    );
  }
}

export default App;
