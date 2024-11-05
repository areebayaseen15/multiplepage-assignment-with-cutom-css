import React from 'react'
import Button from './Button'

const GolfCard = () => {
  return (
    <div id='golfcontent'>
         <h1>OUR GOLF LESSONS</h1>
      <div id='lessons'>
        <h4>INDIVIDUAL LESSONS</h4>
      <h4>GROUP LESSONS</h4>
      <h4>JUNIOR LESSONS</h4></div>

      <div id='golfCard'>
        
      <img
                  id="colon2"
                  src="/Assests/golf.avif"
                  alt=""
                />
             <div>
             <h2>INDIVIDUAL LESSONS</h2> 
       <p>Get all the attention you need with a one-to-one lesson.
       Your golf coach for one-off sessions or a series of sessions will ensure you focus on what matters to you and your game in order to reach your goals whether it be performance or results based.</p>
        <div id='btncard' className='bg-black text-white  w-fit p-3 text-xl font-bold mt-0 ml-2 mb-10 rounded-full '>
        <Button text={'Contact Our Pros'}/>
        </div>
      
      </div>
             </div>
             </div>
       
  )
}

export default GolfCard
