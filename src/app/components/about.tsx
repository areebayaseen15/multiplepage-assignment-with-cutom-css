import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="About">
            <div id="about-us">
              <div className="img">
                <Image
                  alt="logo"
                  width={100}
                  height={50}
                  src="/Assests/img1.avif"
                />
                <Image
                  alt="logo"
                  width={100}
                  height={50}
                  src="/Assests/img2.avif"
                />
              </div>
              <div id="about-us-in">
                <h3>ABOUT US</h3>
                <p>
                  Home to a 46-bay, multi-tier, floodlit driving range, powered
                  by Toptracer Range technology. Complimented by a practice
                  green and bunker, coffee shop and American Golf Store. There
                  truly is something for everyone as we also boast two outdoor
                  18-hole dinosaur themed crazy golf courses.
                  <br />
                  <br />
                  Please note: we are a cashless venue. The range closes at 10pm
                  with last balls at 9pm.
                </p>
              </div>
            </div>
          </div>
  )
}

export default About
