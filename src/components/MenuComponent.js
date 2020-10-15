import React from 'react';
import { Card,
         CardImg,
         CardTitle,  
         Button,
         CardImgOverlay,
         Breadcrumb,
         BreadcrumbItem
        } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish)=>{
            return (
            <div key={dish.id} className="col-md-5 col-12 p-1 mr-3 bg-info">
                <Card>
                    <CardImg className="img-fluid" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle className="font-weight-bold p-2 btn btn-lg btn-warning">
                            {dish.name} 
                        </CardTitle>   
                    </CardImgOverlay>
                    <CardImgOverlay>
                    <Link to={`/menu/${dish.id}`}>
                        <Button className="float-right btn btn-danger btn-lg font-weight-bold">
                            View Details
                        </Button>
                    </Link>
                    </CardImgOverlay>
                </Card>
            </div>);
        });
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return ( 
            <div className="container">
                <div className="row mt-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row mt-1">
                        {menu}
                </div>
                <hr />
            </div>
        );
    }

 
export default Menu;