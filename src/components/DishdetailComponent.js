import React, { useState } from 'react';
import { 
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Modal, 
    ModalHeader, 
    ModalBody,
    Button, 
    Label, 
    Row, 
    Col,
   } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
 
const DishDetail = (props) => {

    const CommentForm = () => {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const [isModalOpen,setIsModalOpen] = useState(false);
        const toggleModal = () => setIsModalOpen(!isModalOpen);
        const handleSubmit = (values) =>{
            toggleModal();
            props.addComment(props.dish.id, values.rating, values.author, values.comment);
        }
        return(
        <React.Fragment>
            <Button outline color="secondary" onClick={toggleModal}>
                <i className="fa fa-pencil fa-lg mr-2" aria-hidden="true"></i>
                Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={{size: 12}}>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option defaultChecked={true}>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author" 
                                    className="form-control" placeholder="Your Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>                        
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment" 
                                    className="form-control" rows="6" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={12}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
        );
    }

    const renderComments = (comments, addComment, dishId) => {
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
                <React.Fragment>
                <ul className="list-unstyled">
                    { comments1 }
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
                </React.Fragment>
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
                    <CardImg className="img-thumbnail text-center" src={baseUrl + dish.image} alt={dish.name} />
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
                {renderComments(comments, props.addComment, props.dish.id)}
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
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
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