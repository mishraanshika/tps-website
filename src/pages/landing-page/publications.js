import React from 'react'
import {Link} from "react-router-dom"

const Publications = () => {
  return (
    <>
      <div className="public">
          
          <h1>Publications</h1>
          <div className="public-row1">
              <div className="public-col">
              <a href='https://drive.google.com/file/d/12PK_-eIL8s3CdUSRhjG92qQNA9Mbx4sX/view?usp=sharing' download>View PDF</a>
              </div>
              <div className="public-col">
              <a href='https://drive.google.com/file/d/1LKzi3roOJnmyDLgrM1lrJSS2W1TrHQZY/view?usp=sharing'download>View PDF</a>
              </div>
          </div>
          <div className="public-row2">
              <div className="public-col">
              <a href='https://drive.google.com/file/d/1-9n7eXlnnLi-4DnSyiqqX17CDu6PPuMp/view?usp=sharing' download>View PDF</a>
              </div>
              <div className="public-col">
              <a href='https://drive.google.com/file/d/1eHgPy2Q82zjOd7sGywYtKySYeSFCVR0G/view?usp=sharing' download>View PDF</a>
              </div>
          </div>
          <Link to="/publications" className="learn-button">Read more</Link>
      </div>

    </>
  )
}

export default Publications