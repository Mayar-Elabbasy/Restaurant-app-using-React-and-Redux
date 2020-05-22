import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/Dishes';
import { Navbar1 } from './shared/Navbar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
render(){
    return ( 
      <div>
        <Navbar1 />
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
