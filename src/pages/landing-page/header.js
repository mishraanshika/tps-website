import React from 'react'
import {Link} from "react-router-dom"
// import Bannerimg from /Users/Anshika/Desktop/tps-website/src/assets/photo2.jpg

const Header = () => {
  return (
    <>
    <div className="body1">
    <div className="text-box">
       <h1> The Presidential Suite</h1>
       <p>The Presidential Suite is an educational organisation with the aim of improving the availability and accessibility of education.</p>
       <Link to="/about" className="learn-button">Learn more</Link>
    </div>
    </div>    
    </>
  )
}


export default Header;