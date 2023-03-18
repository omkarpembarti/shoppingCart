import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context'

const SingleProduct = ({ product }) => {

    const { state, dispatch } = CartState();
    const showRemoveBtn = state.cart.some((p) => p.id == product.id);
    const showAddBtn = !showRemoveBtn;

    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>
                        <div>${product.price.split(".")[0]}</div>
                        <div>{product.fastDelivery ? ("Express Delivery") : ("Normal Delivery")}</div>
                        <Rating rate={product.ratings}></Rating>
                    </Card.Subtitle>
                    {showRemoveBtn && <Button variant='danger' onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: product })
                    }}>Remove from Cart</Button>}
                    {showAddBtn && <Button disabled={!product.inStock}
                        onClick={() => {
                            dispatch({ type: "ADD_TO_CART", payload: product })
                        }}>
                        {product.inStock == 0 ? "Out of Stock" : "Add to Cart"}
                    </Button>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct
