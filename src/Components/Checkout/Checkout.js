import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const {_id } = useParams();
    const history = useHistory()
    const [checkout, setCheckout] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const date = new Date()
    useEffect(()=>{
        fetch(`https://tranquil-escarpment-83624.herokuapp.com/events/${_id}`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    },[_id])

    const handleOrder = () => {
        history.push('/order')
        const checkOut = {pdId:checkout._id, name:checkout.name, price:checkout.price, imageURL:checkout.imageURL, ...loggedInUser, date}
        fetch('https://tranquil-escarpment-83624.herokuapp.com/checkout', {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(checkOut)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="container">
            <h3 className='text-center'>Your Checkout List</h3>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Cycle Name</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{checkout.name}</td>
                <td>1</td>
                <td>${checkout.price}</td>
                </tr>
                
            </tbody>
            
        </Table>
        <Button onClick={handleOrder} className="btn-dark">Order</Button>
        </div>
    );
};

export default Checkout;