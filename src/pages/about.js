import React from 'react'
import '../styles/about.css'
import Back from '../assets/abtpage.jpeg'

const About = () => {
  return (
    <>
     <div className='abtpage'>
     <div className='abt1'>
     <h1>About</h1>
     <h3>The Presidential Suite</h3>
     <p>The Presidential Suite is a global educational organisation with the aim of making education more accessible to all. The Presidential Suite also focuses on raising awareness on financial literacy, business and economics among underprivileged students, especially girls, as our goal is to help bridge the gender gap existing in education provision and also to provide underprivileged girls with the opportunity to take control of their futures 
       <br/><br/>
The Presidential Suite also concentrates on creating successful and socially conscious entrepreneurs by equipping students with deeper knowledge and understanding of what it takes to be an entrepreneur.</p>
</div><img src={Back}/>
<h1>Founder</h1>
<h3>Shivani Ashyanth</h3>
<p>Shivani Ashyanth is a student with the goal of impacting the world in a positive way. 
<br/><br/>
“The Presidential Suite has a vision of creating a difference in the world. However small that change may start out to be, this is a community that will keep growing, learning, and achieving.”</p>
   </div>
    </>
  )
}

export default About