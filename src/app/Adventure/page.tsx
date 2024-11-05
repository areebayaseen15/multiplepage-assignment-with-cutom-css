import React from 'react'
import Image from "next/image";
import Course from  "../components/Course"

const AdventureGolf = () => {
  return (
    <div id="page">
   <div id="page-1">
    <div className="container">
    <div className="image-section">
        <Image
          alt="img"
          width={5000}
          height={1000}
          src="/Assests/adventure.avif"
          className="golf"
        />
        </div>
      <div className="text-section">
         <h1>A Whole New Range Experience</h1>
         <h2>Dino Crazy Golf</h2>
        <p>
        Adventure awaits you!

With two epic 18-hole outdoor crazy golf courses plus a café serving delicious treats, whether you’re a big kid or a little kid, there really is something for everyone! The perfect place to enjoy some quality time with the family and get some fresh air!
        </p>
      </div>
 
        </div>
        </div>

             <Course/>
      </div>
  )
}

export default AdventureGolf
