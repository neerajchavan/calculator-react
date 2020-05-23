import React from 'react';
import {Component} from 'react';
import './Screen.css'




class Screen extends Component{
render(){
  return (
    <div class = "screen">
    {this.props.children}
    </div>
  );
}
}

export default Screen;
