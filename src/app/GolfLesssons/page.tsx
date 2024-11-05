import React from 'react'
import Image from "next/image";
import { FaArrowDownLong } from 'react-icons/fa6';
import GolfCard from '../components/GolfCard';


const Golf = () => {

  return (
    <div id="page">
   <div id="page-1">
    <div className="container">
    <div className="image-section">
        <Image
          alt="img"
          width={5000}
          height={1000}
          src="/Assests/nails.avif"
          className="golf"
        />
        </div>
      <div className="text-section">
        <h1>Your path to playing golf</h1>
        <h2>Toptracer Range</h2>
        <p>
        Our pros are truly dedicated to your improvement and aim for every student to leave having learnt something and feeling more confident about their golf game.

Whether you are beginning your golfing journey or simply looking to improve your game, our PGA qualified professionals offer tailored lessons to best fit your golfing needs.
        </p>
      </div>
 
        


        </div>
        </div>

        <div className="ques">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <hr />

        
      <li> <h4>01. Is equipment provided for the lesson? Are balls included in the lesson?</h4>   <FaArrowDownLong className="i" />
  </li>
       
        <hr />
       
        <li> <h4>02. Where are lessons taken?</h4> <FaArrowDownLong className="i" /></li>
        <hr />
       
        <li> <h4>03. Will technology be used in each lesson? </h4>   <FaArrowDownLong className="i" /></li>
        <hr />
        
        <li> <h4>04.Do you do lessons in the evening? </h4>   <FaArrowDownLong className="i" /></li>
        <hr />
        
        <li> <h4>05. CAN I RENT CLUBS? </h4>   <FaArrowDownLong className="i" /></li>
        <hr />
    </div>

<GolfCard />
</div>
  )
}

export default Golf 
