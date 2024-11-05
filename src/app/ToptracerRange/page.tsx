import React from "react";
import Image from "next/image";
import Nav from "../components/nav";
import Question from "../components/question";
import { FaArrowDownLong } from 'react-icons/fa6'

const Toptracer = () => {
  return (
    <div id="page">
        <Nav/>
       <div id="page-1">
        <div className="container">
        <div className="image-section">
            <Image
              alt="img"
              width={5000}
              height={1000}
              src="/Assests/hero-toptracer-.avif"
              className="golf"
            />
            </div>
          <div className="text-section">
            <h1>A Whole New Range Experience</h1>
            <h2>Toptracer Range</h2>
            <p>
            Looking for somewhere to enjoy quality time with friends and family or simply have some “me” time. Our floodlit 46-bay multi-tier range features market leading technology in Toptracer that everyone can enjoy. Open until late all week, nothing quite beats a chilled evening session on the range with food and drinks delivered straight to your bay.
              this wonderful relaxing spot is open from 9:30 am.
            </p>
            {/* <div className="open-info">OPEN: Monday - Sunday from 9:30am</div> */}
          </div>
     
            {/* <div id="arrow">
              <i className="ri-arrow-down-line"></i>
            </div> */}




            
            </div>
          </div>

          <div id="sec-2">
      
                    <div className="image-container">
                        <div className="image-box">
                        <Image
              alt="img"
              width={700}
              height={700}
              src="/Assests/about1.avif"
              className="img1"
            />
            </div>
                        
                       
                    </div>
                    <div className="text-container">
                        <h2>ABOUT TOPTRACERRANGE</h2>
                        <p>Toptracer shows the flight path of golf balls with valuable shot data, as well as offering in-app games and 
                            practice modes. The technology redefines the driving range experience – from a functional training session to 
                            an exciting social experience for all ages and abilities. Toptracer also allows you to play the world’s most 
                            iconic courses at Pebble Beach, Torrey Pines, Royal St. George’s and St Andrews range of food and drink options 
                            below.</p>
                    </div>
            </div>

            <div className="ques">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <hr />
        <li> <h4>01. CAN I RENT CLUBS? </h4>   <FaArrowDownLong className="i" /></li>
        <hr />
        <li> <h4>02. CAN I USE THE SHORT GAME AREA??</h4> <FaArrowDownLong className="i" /></li>
        <hr />
    </div>


    {/* what can we do */}
    <div id="miniCards">
    <h1>EXPLORE WHAT ELSE WE DO?
    </h1>
    <div className="elem">
        <h2>TOPRACER RANGE</h2>
        <img
                  id="colon2"
                  src="/Assests/selm1.jpg"
                  alt=""
                />
    </div>

    <div className="elem">
        <h2>TOPRACER RANGE</h2>
        <img
                  id="colon2"
                  src="/Assests/c2.webp"
                  alt=""
                />
    </div>

    <div className="elem">
        <h2>TOPRACER RANGE</h2>
        <img
                  id="colon2"
                  src="/Assests/c3.jpg"
                  alt=""
                />
    </div>
  </div>
    </div>
  )
}

export default Toptracer
