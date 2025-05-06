import React, { useState } from 'react'
import '../styles/subsform.css'

import {Link} from "react-router-dom"
const Subsform = () => {
 
 
 
  return (
    <>
    <div className='containersubs'>
    <h5>Subscribe to our Newsletters!</h5>
       <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSe6Y99FyChaBx23aVOn50hHqGO6wozGbsPKBV6NDrp7RHFs4w/formResponse' >
        <input type="text" id='name' placeholder='Full Name' required name='entry.1733410890'></input>
        <input type="email" id='email' placeholder='Email id' required name='entry.769657968'></input>
        <Link to='/'><button type='submit'>Submit</button></Link>
       </form>
     </div>

     <script src='https://smtpjs.com/v3/smtp.js'></script>

     
    </>
  )
}

export default Subsform