import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddEvent from '../AddEvent/AddEvent';
import Manage from '../Manage/Manage';

const Admin = () => {
    const [manage, setManage] = useState(false);
    const [addEvent, setAddEvent] = useState(true);
    const handleManage = () =>{
        setManage(true)
        setAddEvent(false)
    }
    const handleAddEvent = () =>{
        setAddEvent(true)
        setManage(false)
    }
    return (
        <div className="container">
            <div className="row container">
                <div className="col-md-3 ">
                <Button className="mt-4" onClick={() =>handleManage(manage)} variant="contained" color="primary">
                    Manage
                </Button>
                <br/>
                <br/>
                <Button onClick={() =>handleAddEvent(addEvent)} variant="contained" color="primary">
                    Add Product
                </Button>
                </div>
                <div className="col-md-9">
                    {manage && <Manage></Manage>}
                    {addEvent && <AddEvent></AddEvent>}
                </div>
            </div>
        </div>
    );
};

export default Admin;