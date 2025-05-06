import React from 'react'
import {Link} from "react-router-dom"

const Events = () => {
  return (
    <>
     <div className="events-image">
         <img src="img.jpeg"/>
       </div>
       <div className="evnt-head">
         <h1>Events</h1>
       </div>
       <div className="evnttext">
         <br/>
         <p>The aim of our organisation is to raise awareness on financial literacy and improve the accessibility of education. 
This is being achieved with various events and activities that engage and advance our students’ learning. 
</p>
         <Link to ="/events" className="evnt-learn">Learn more</Link>
        </div>
       
        

    </>
  )
}

export default Events
