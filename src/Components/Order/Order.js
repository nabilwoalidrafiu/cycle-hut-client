import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router';
import { Button, Table } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';

const Order = () => {
    const {_id} = useParams()
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]); 
     
    useEffect(()=>{
        fetch('https://tranquil-escarpment-83624.herokuapp.com/order?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    },[events])
    return (
        <div className='container'>
            <h3 className='text-center'>Your Order List</h3>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Cycle Name</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                    
                {
                        events.map(event => <tr>
                            <td>{event.name}</td>
                            <td>${event.price}</td>
                            </tr>)
                    }  
                    
            </tbody>
            
        </Table>
                {
                       events.length === 0 &&  
                           <div className="text-center">
                       <CircularProgress  className="text-center" color="secondary" />
                       </div>
                   }
        <Button onClick={() =>{history.push('/home')}} className="btn-dark">Continue to Shipping</Button>
        </div>
    );
};

export default Order;