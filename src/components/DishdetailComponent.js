import React, { Component } from 'react';
import { 
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle,  
   } from 'reactstrap';

class Dishdetail extends Component {
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
        const {dish} = this.props;
            return ( 
            <div className="container">
                <div className="row mt-4">
                        {this.renderSelectedDish(dish)}
                </div>
            </div>
        );
    }
}
 
export default Dishdetail;











        