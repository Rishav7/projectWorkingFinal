import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
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
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>WISHLIST BOOK Title</th>
                                    <th>WISHLIST BOOK Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlists.map((wishlist) => (
                                    <tr key={wishlist[0]._id}>
                                        <td>
                                            {wishlist[0].title}
                                        </td>
                                        <td>
                                            {wishlist[0].price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </>

    );
};

export default WishlistScreen;