import React from "react";
import {useSelector} from "react-redux";
import {Button, Carousel, Col, Container, Image, ListGroup, Row} from 'react-bootstrap';

import {ProductItem} from "../global";
import {store, add, remove} from "../store";
import {Product} from "../component/product";
import {useParams} from "react-router-dom";



const ProductPage = () => {

    const products = useSelector((state: ProductItem[
        ]) => state);

    return (
        <Container className='p-5'  >

            <h1 className='p-5 '>ProductPage</h1>
            {products
                .filter(product => product.added)
                .map((product: ProductItem) => (

                    <React.Fragment >
                        <Button href='/categoryPage'
                            variant="warning"
                                onClick={() => store.dispatch(remove({ id: product.id }))}
                        >Go Back</Button>
                <Row>
                    <Col md={6} className='p-3'>


                        <Carousel  >
                            <Carousel.Item   >
                                <Image key={product.id}
                                    className="d-block w-100"

                                    src= {product.imageUrl1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src={product.imageUrl1}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className='p-3'>
                        <ListGroup.Item>
                            <h5> {product.title}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>

                            <h5>Brand: {product.brand}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price: {product.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Description: {product.description}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button to={`/cart/${product.id} `}
                                    variant="warning"
                                    key={product.id}
                                    disabled={product.added}
                                    onClick={() => store.dispatch(add(product))}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>

                    </Col>

                </Row>
                    </React.Fragment>

            ))}


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>

    );

};
export  {ProductPage};
