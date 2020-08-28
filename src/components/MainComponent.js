import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import { Navbar1 } from '../shared/Navbar';
import DishDetail from './DishdetailComponent';

class MainComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId });
};
render(){
    return ( 
      <div>
        <Navbar1 />
        <Menu dishes = {this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }
}

export default MainComponent;