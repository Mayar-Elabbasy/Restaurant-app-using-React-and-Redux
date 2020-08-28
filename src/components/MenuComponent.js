import React from 'react';
import { Card,
         CardImg,
         CardTitle,  
         Button,
         CardImgOverlay
        } from 'reactstrap';

const Menu = (props) => {

        const menu = props.dishes.map((dish)=>{
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
                    <Button className="float-right btn btn-danger btn-lg font-weight-bold" 
                            onClick={() => props.onClick(dish.id)}>View Details</Button>
                    </CardImgOverlay>
                </Card>
            </div>);
        });
            return ( 
            <div className="container">
                <div className="row mt-1">
                        {menu}
                </div>
            </div>
        );
    }

 
export default Menu;