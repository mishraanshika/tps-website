import React from 'react'
import '../styles/events.css'

const Events = () => {
  return (
    <>
    <div className='evtpage'>
      <div className='desevents'>
We provide sessions with speakers, interviews hosting successful entrepreneurs talking about how they've made a brand for themselves, and masterclasses.
Lively debates and discussions were held where members had an open floor to discuss current affairs related to the world of business and entrepreneurship.
Fun and engaging newsletters were published and reading resources were available.
Case studies addressing issues of topics related to entrepreneurship and business were set for members to solve and strategize ideas.
Social events like charity drives were organised to raise funds for local entrepreneurs.</div>
    <div className='b1'>
       {/* <img src="images.jpeg"/> */}
        <h1>Speakers</h1>
        <h4>1. Rajeev Mecheri</h4>
       <p>
        - talked about his personal experience with entrepreneurship and how one can start and grow a successful business</p>
    
        <h3>2.Vijay Srinivasan</h3>
        <p>- talked about how businesses come up with an effective business plan</p>
    </div>

    <div className='b2'>
        {/* <img src="images.jpeg"/>*/}
        <h1>Masterclass</h1>
        <h4>1. Daniel Nisnik</h4>
          <p>-Business Frameworks (SWOT Analysis, PESTLE, Porters 5 forces)</p>
           
         <h3> 2. Saswathy Srinivasan </h3>
         <p> -Emerging Technology and Financial Accounting</p>
        
         
        <h3>3. Adit Kashyap </h3>
         <p> -Brainstorming Business Ideas (in order to start a successful business you need an innovative and creative idea- one that solves a real world issue)
        </p>
    </div>

    <div className='b3'>
        {/* <img src="images.jpeg"/> */}
        <h1>Debates</h1>
        <p>1. Entrepreneurship is a skill that can only be mastered through experience<br/> <br/>
        2. Not everyone can be an entrepreneur</p>
    </div>

    <div className='b4'>
       {/* <img src="images.jpeg"/> */}
        <h1>Case Studies</h1>
        <div className='casestudylink1'>
        <a href='https://www.smartinsights.com/digital-marketing-strategy/online-business-revenue-models/amazon-case-study/'>
          1. Amazon: E-Commerce retail; giant business case study</a>
        </div><br/><br/>
      
        <div className='casestudylink2'>
        <a href='https://beloved-brands.com/apple-simplicity/'>
          2. Apple</a>
        </div><br/><br/>
        
        <div className='casestudylink3'>
        <a href='https://hapijournal.com/wp-content/uploads/2020/01/goldman.pdf'>
          3. Goldman Sachs case study</a>
        </div><br/><br/>

        <div className='casestudylink4'>
        <a href='https://drive.google.com/file/d/1-1RXp8C_o4y04qTm7_rTYlxfh7yKFlp3/view?usp=sharing'>4. PwC Tesla</a>
        </div>
    </div>
   </div>
    </>
  )
}

export default Events