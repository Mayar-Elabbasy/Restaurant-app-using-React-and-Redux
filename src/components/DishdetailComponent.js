import React from 'react';
import { 
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem 
   } from 'reactstrap';
import { Link } from 'react-router-dom';
 
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
                {renderComments(comments)}
            </div>
            </React.Fragment>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    const {dish, comments} = props;
        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row m-1">
                {renderSelectedDish(dish)}
            </div>
            <hr />
        </div>
    );
}
 
export default DishDetail;











        