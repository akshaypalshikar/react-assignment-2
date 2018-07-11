import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputText from "./InputText/InputText"

class App extends Component {
  state={
    text:"Test",
    length:"Test".length
  }

  textChangeHandler = (event) =>{
    this.setState({text:event.value,length:event.target.value.length});

  }




  render() {
    return (
      <div className="App">
       <InputText changed={(event)=>this.textChangeHandler(event)}  {...this.state}/>
      </div>
    );
  }
}

export default App;
