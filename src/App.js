import React from 'react';
// eslint-disable-next-line 
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
function App({name,age}){
  return <div>
    "hello world from app.js updated by {name} age ={age}
    <br/>
    <Hello firstname = {name} ></Hello>
  </div>
}

// function App(props) {
//   return <div>Hello world from App.js updated {props.name}</div>
  
// }

export default App;
