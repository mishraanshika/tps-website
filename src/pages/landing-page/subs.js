import React from 'react'
import {Link} from "react-router-dom"

const Subs = () => {
  return (
    <>
     <div className="homesubs">
            <h1>Subscribe to our Newsletters!</h1>
            <Link to="/subscribe" className="learn-button">Subscribe!</Link>
         </div>
    </>
  )
}

export default Subs