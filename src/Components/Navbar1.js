import React, {useState} from 'react'
import '../styles/navbar1.css'

const Navbar1 = () => {
  
  
    var menu = document.getElementById("menu");
    function showMenu(){
        menu.style.right="0";
    }
    var menu = document.getElementById("menu");
    function hideMenu(){
        menu.style.right="-200px";
    }  


  // const [openLinks, setOpenLinks] = useState(false);

  // const toggleNavbar=() => {
  //   setOpenLinks(!openLinks);
  // }
  
  return (
    <>
    <nav>
    <a href="index3.html"><img src="pslogo.jpeg"/></a>
    <div className="menu" id="menu">
    <i className="fa-solid fa-xmark" onclick= {hideMenu()}></i>
    <ul>
    <div className="dropdown">
       <li><button className="dropbtn">About</button></li>
       {/* <div className="dropdown-content">
           <a href="#">Link 1</a>
           <a href="#">Link 2</a>
           <a href="#">Link 3</a>
       </div> */}
    </div>
    <div className="dropdown">
       <li><button className="dropbtn">Chapters</button></li>
       {/* <div className="dropdown-content">
           <a href="#">Link 1</a>
           <a href="#">Link 2</a>
           <a href="#">Link 3</a>
       </div> */}
    </div>
    <div className="dropdown">
      <li><button className="dropbtn">Publication</button></li>
      {/* <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
    </div>
    <div className="dropdown">
        <li><button className="dropbtn">Contact</button></li>
        {/* <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div> */}
     </div>
    </ul>
 </div>
<i className="fa-solid fa-bars" onclick={showMenu()}></i>
 </nav>
</>
  )
}



export default Navbar1