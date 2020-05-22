import React, { Component } from 'react';
import {Media} from 'reactstrap';
class Menu extends Component {
    constructor(props){
        super(props);
    
    this.state = {  
    };
}
    render() { 
        const menu = this.props.dishes.map((dish)=>{
            return (
            <div key={dish.id} className="col-12 p-4 bg-info">
                <Media>
                <Media left>
                    <Media src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>
                            {dish.name} 
                        </Media>
                            {dish.description}
                    </Media>
                </Media>
            </div>);
        });
            return ( 
            <div className="container">
                <div className="row">
                    <Media list className="m-5">
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}
 
export default Menu;