import React from 'react'
import Image from "next/image";

const Minicards = () => {
  return (
    <div id="miniCards">
    <h1>WHAT ARE YOU WAITING FOR?
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
                  src="/Assests/elem2.jpg"
                  alt=""
                />
    </div>

    <div className="elem">
        <h2>TOPRACER RANGE</h2>
        <img
                  id="colon2"
                  src="/Assests/elem3.jpg"
                  alt=""
                />
    </div>
  </div>
             
  )
}

export default Minicards
