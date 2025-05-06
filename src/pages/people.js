import React from 'react'
import '../styles/people.css'
import Founder from '../assets/founder.jpeg'
import Hod from '../assets/hod.jpeg'
import Cto from '../assets/cto.jpeg'

const People = () => {
  return (
    <>
    <div className='pb1'>
    <img src= {Founder} />
    <h1>Shivani Ashyanath</h1>
    <h4>Founder and President</h4>
    </div>

    <div className='pb2'>
    <img src={Hod}/>
    <h1>Norah Alhedaithy</h1>
    <h4>Head of Development</h4>
    </div>

    <div className='pb1'>
    <img src={Cto}/>
    <h1>Anshika Mishra</h1>
    <h4>Chief Technology Officer</h4>
    </div>
    </>
  )
}

export default People