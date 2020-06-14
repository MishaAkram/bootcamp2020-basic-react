import React from 'react';
import './Hello.css';

function Hello({firstname}){
  return <div>
      <p className="myname">
    this is para in Hello Tag name : {firstname} </p>
  </div>
}



export default Hello;
