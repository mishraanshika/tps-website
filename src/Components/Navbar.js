import React, {useState} from 'react'
import '../styles/navbar.css'
import Logo from '../assets/pslogo.jpeg'
import {Link} from "react-router-dom"
import  ReorderIcon  from '@mui/icons-material/Reorder'

const Navbar = () => {


  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar=() => {
    setOpenLinks(!openLinks);
  }
  
  return (
    <>
    <nav>
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <Link to='/'><img src={Logo} /></Link>
        <div className="hiddenLinks">
          <Link to="/about"> About </Link>
          <Link to="/people"> People </Link>
          <Link to="/events"> Events </Link>
          <Link to="/publications"> Publications </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/about"> About </Link>
          <Link to="/people"> People </Link>
          <Link to="/events"> Events </Link>
          <Link to="/publications"> Publications </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
    </nav>
</>
  )
}



export default Navbar