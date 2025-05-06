import React from 'react'
import InstIc from '@mui/icons-material/Instagram'
import FaceIc from '@mui/icons-material/Facebook'
import TwitIc from '@mui/icons-material/Twitter'
import LinIc from '@mui/icons-material/LinkedIn'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='socialMedia'>
           <a href='https://www.instagram.com/_the_presidential_suite_/'> <InstIc/> </a>
            <FaceIc/>
            <TwitIc/>
            <LinIc/>
            <p> &copy; 2022 thepresidentialsuite.org</p>
        </div>
    </div>
    </>
  )
}

export default Footer