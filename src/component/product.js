import React from "react";

import {ProductItem} from "../global";

import {useSelector} from "react-redux";
import {Button, Card, Container, Row,} from "react-bootstrap";
import {add, store} from "../store";
import { Link, useParams } from 'react-router-dom';
import {ProductPage} from "../pages/productPage";

const Product = () => {

    const products = useSelector((state: ProductItem[]) => state);


    return (
        <Row>
            {products.map((product: ProductItem) => (

                <Card style={{width: '18rem'}} className='ml-3 mt-2 p-2' border='warning'>


                    <Link
                        to={`/productPage/${product.id} `}
                               key={product.id}
                               disabled={product.added}
                               onClick={() => store.dispatch(add(product))}


                    >
                        <Card.Img variant="top" src={product.imageUrl1}/>
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Brand: {product.brand}</Card.Text>
                        <Card.Text>Price: ${product.price}</Card.Text>
                        <Card.Text>Description: {product.description}
                        </Card.Text>
                        <Link to ={`/cart/${product.id} `}
                                type="button"

                                variant="warning"
                                key={product.id}
                                disabled={product.added}
                                onClick={() => store.dispatch(add(product))} >
                        Add to cart
                        </Link>
                    </Card.Body>
                </Card>
            ))}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Row>
    )
}


export {Product};
