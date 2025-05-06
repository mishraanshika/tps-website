import React from 'react'
import {Link} from "react-router-dom"

const Chapters = () => {
  return (
    <>
     <div className="chapter-image">
            <img src="images.jpeg"/>
          </div>
          <div className="chp-head">
            <h1>Chapters</h1>
          </div>
          <div className="chaptext">
            <br/>
            <p>The Presidential Suite is a global organisation with over 15 chapters internationally and nationally. These chapters consist of the organisation being implemented in schools across the world by our diligent and hardworking ambassadors</p> 
            <Link to = "/about" className="chap-learn">Learn more</Link>
          </div>
    </>
  )
}

export default Chapters