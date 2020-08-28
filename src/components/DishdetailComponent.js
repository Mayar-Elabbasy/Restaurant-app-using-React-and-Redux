import React from 'react';
import { 
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle,
   } from 'reactstrap';
 
const DishDetail = (props) => {
   
    const renderComments = (comments) => {
        if (comments!=null)
        {
            const comments1 = comments.map(comment=>{
                return(
                    <React.Fragment key={comment.id}>
                        <li>{ comment.comment }</li><br />
                        <li>-- { comment.author }, 
                        {new Intl.DateTimeFormat("en-GB", {
                            month: "long", day:"2-digit", year: "numeric"}).format(comment.date.firstSale)}</li><br />
                    </React.Fragment>
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

    const renderSelectedDish = (dish) => {
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
                {renderComments(dish.comments)}
            </div>
            </React.Fragment>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    const {dish} = props;
        return (
        <div className="container">
            <div className="row mt-1">
                {renderSelectedDish(dish)}
            </div>
        </div>
    );
}
 
export default DishDetail;











        