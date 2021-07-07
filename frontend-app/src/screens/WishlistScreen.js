import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMyWishlist } from '../actions/wishlistActions'


const WishlistScreen = ({ }) => {
    const dispatch = useDispatch()

    const wishlistListMy = useSelector((state) => state.wishlistListMy)
    const { loading: loadingWishlist, error: errorWishlist, wishlists } = wishlistListMy
    console.log(wishlists)
    useEffect(() => {
        dispatch(listMyWishlist())
    }, [dispatch])


    return (

        <>
            <Row>
                <Col md={9}>
                    <h2>My Wishlist</h2>
                    {loadingWishlist ? (
                        <Loader />
                    ) : errorWishlist ? (
                        <Message variant='danger'>{errorWishlist}</Message>
                    ) : (                        
                        <CardDeck>
                            {wishlists.map((wishlist) => (
                                <>
                                <Card className="cardContainer">
                                    <Row>
                                        <Col md={4}>
                                            <Card.Img className="cardsImage" variant="top" src={wishlist[0].image} width="200px" height="300px"/>
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text>
                                                    <h1 className="cardsHeading">Title : {wishlist[0].title}</h1>
                                                    <h5 className="cardsText">Category : {wishlist[0].category}</h5>
                                                    <h5 className="cardsText">Price : {wishlist[0].price}</h5>
                                                </Card.Text>
                                            </Card.Body>
                                                <div>
                                                    <button class="btn btn-light">
                                                        <i className="text-primary ">Add to Cart</i>
                                                    </button>
                                                    <button class="btn btn-light">
                                                        <i className="text-danger ">Remove from wishlist</i>
                                                    </button>
                                                </div>
                                        </Col>
                                    </Row>
                                </Card><br/>
                                </>
                            ))}
                        </CardDeck>
                    )}
                </Col>
            </Row>
        </>

    );
};

export default WishlistScreen;