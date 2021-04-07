import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    
    const [events, setEvents] = useState([]); 
    useEffect(()=>{
        fetch('https://tranquil-escarpment-83624.herokuapp.com/events')
    .then(res=> res.json())
    .then(data => {
        setEvents(data) 
    })
    },[])
    
    return (
        <div className="text-center" 
        style={{backgroundColor: "#3F51B5"}}
        >
            
            <div className="teams mt-1 container">
                     {
                       events.length === 0 &&   <div>
                       <CircularProgress  className="mt-5" color="secondary" />
                     </div>
                   }
                <div className='text-center row row-cols-1 row-cols-md-3 g-4 '>
                   
                    {
                        events.map(event => <Event className="row" key={event._id} event={event}></Event>)
                    }
                </div>

            </div>
            <div className="footer mt-5 p-5 text-white">
                <p>Copyright©2021_cycle_hut. All rights reserved.Bangladesh.</p>
            </div>
        </div>
    );
};

export default Home;