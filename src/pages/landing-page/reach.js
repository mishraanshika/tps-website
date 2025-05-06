import React from 'react'

let valueDisplays = document.querySelectorAll(".num");
let interval = 400;

valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplay.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
});

const Reach = () => {
  return (
    <>
      <div className="reach">
              <h1>Reach</h1>
          
              <div className="wrapper">
                <h1></h1>
                 <div className="container">
                  <i className="fa-solid fa-calendar"></i>
                  <span className="num" data-val="5000">5000</span>
                  <span className="text">Event Attendees</span>
                 </div>
                
                  <div className="container">
                   <i className="fa-solid fa-user"></i>
                   <span className="num" data-val="2000">2000</span>
                   <span className="text">Members</span>
                  </div>
            
                  <div className="container">
                    <i className="fa-solid fa-file"></i>
                    <span className="num" data-val="15">15</span>
                    <span className="text">Chapters</span>
                   </div>
            
                   <div className="container">
                    <i className="fa-solid fa-newspaper"></i>
                    <span className="num" data-val="20">20</span>
                    <span className="text">Publications</span>
                   </div>
            
                   <div className="container">
                    <i className="fa-solid fa-video"></i>
                    <span className="num" data-val="100+">100+</span>
                    <span className="text">Media</span>
                   </div>

                   <div className="container">
                    <i className="fa-solid fa-users"></i>
                    <span className="num" data-val="14">14</span>
                    <span className="text">Ambassadors</span>
                   </div>
                
               </div>

        </div>


    </>
  )
}



export default Reach