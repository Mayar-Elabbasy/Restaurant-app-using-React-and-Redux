import React, { Component } from 'react';
import { Card,
         CardImg,
         CardText, 
         CardBody,
         CardTitle,  
         Button,
         CardImgOverlay
        } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);
    
    this.state = {  
        selectedDish: null
    };
}
    onDishSelect(dish){
        this.setState({ selectedDish: dish });
    };

    renderSelectedDish(dish){
        if (dish != null){
            return(
            <div key={dish.id} className="col-md-12 col-12 p-4 bg-warning">
                <Card>
                    <CardImg className="img-thumbnail text-center" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle className="font-weight-bold">
                            {dish.name} 
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>   
                    </CardBody>
                </Card>
            </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render() { 
        const menu = this.props.dishes.map((dish)=>{
            return (
            <div key={dish.id} className="col-md-6 col-12 p-4 bg-info">
                <Card>
                    <CardImg className="img-fluid" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle className="font-weight-bold p-2 btn btn-lg btn-warning">
                            {dish.name} 
                        </CardTitle>   
                    </CardImgOverlay>
                    <CardImgOverlay>
                    <Button className="float-right btn btn-danger btn-lg font-weight-bold" 
                            onClick={() => this.onDishSelect(dish)}>View Details</Button>
                    </CardImgOverlay>
                </Card>
            </div>);
        });
            return ( 
            <div className="container">
                <div className="row mt-4">
                        {menu}
                </div>
                <div className="row mt-4">
                    <Dishdetail dish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}
 
export default Menu;