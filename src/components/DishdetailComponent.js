import React, { Component } from 'react';
import { 
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle,
   } from 'reactstrap';
 
class DishDetail extends Component {
    constructor(props){
        super(props);
    
    this.state = {  
        selectedDish: null
    };
}
onDishSelect(dish){
    this.setState({ selectedDish: dish });
};

renderComments(comments){
    if (comments!=null)
    {
        const comments1 = comments.map(comment=>{
            return(
                <div key={comment.id}>
                    <li>{ comment.comment }</li><br />
                    <li>-- { comment.author }, 
                    {new Intl.DateTimeFormat("en-GB", {
                        month: "long", day:"2-digit", year: "numeric"}).format(comment.date.firstSale)}</li><br />
                </div>
            );}
        );
        return(
            <ul className="list-unstyled">
            { comments1 }
            </ul>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

renderSelectedDish(dish){
    if (dish != null){
        return(
        <React.Fragment>
        <div key={dish.id} className="col-md-5 col-12 p-2 bg-warning">
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
        <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
            {this.renderComments(dish.comments)}
        </div>
        </React.Fragment>
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
                <div className="row mt-1">
                    {this.renderSelectedDish(dish)}
                </div>   
            </div>
        );
    }
}
 
export default DishDetail;











        