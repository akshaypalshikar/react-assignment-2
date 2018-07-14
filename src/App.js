import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputText from "./InputText/InputText"
import CharacterComponent from "./CharacterComponent/CharacterComponent"

class App extends Component {
  state={
    text:"Test",
    length:"Test".length,
    charArray:['T','e','s','t']
  }

  textChangeHandler = (event) =>{
    const value = event.target.value;
    this.setState({text:value,length:value.length,charArray:value.split('')});
  }

  deleteCharHandler = (index) =>{
    console.log(index);
    let charArray = this.state.charArray.slice(0);
    charArray.splice(index,1);
    this.setState({text:charArray.join(''),length:charArray.length,charArray:charArray});
  }

  render() {

    const charArray = this.state.text.split('');

    return (
      <div className="App">
       <InputText changed={(event)=>this.textChangeHandler(event)}  {...this.state}/>
       <div>Characters:
         
          {
            charArray?charArray.map((char,index)=>{
            return (<CharacterComponent char={char} key={index} clicked={()=>this.deleteCharHandler(index)}/>)
          }):null}
         
         </div>
      </div>
    );
  }
}

export default App;
