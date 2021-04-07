import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
const Event = ({event}) => {
    const {_id} = event;
    const history = useHistory();
    const handleClickExplore = (_id) =>{
        history.push(`/checkout/${_id}`)
    }
    return (
        <div className="team-card  col-md-4 col-sm-8 mt-5">
        <div className="card  h-100 shadow">
            <div className="card-photo m-auto">
                <img src={event.imageURL} className="card-img-top w-100" height="300px" width="100%" alt="..."/>
            </div>
            <div className="card-body">
                <h4 className="card-title fw-bold">{event.name} </h4>

                <div className="d-flex justify-content-around">
                    <h5 className="mt-2">${event.price}</h5>
                    <Button onClick={()=> handleClickExplore(_id)}  variant="contained" color="primary">Buy Now </Button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Event;