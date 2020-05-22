import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/Dishes';

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
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
