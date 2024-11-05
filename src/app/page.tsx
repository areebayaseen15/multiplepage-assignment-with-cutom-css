import BackgroundVedio from "./components/BackgroundVedio";
import React from "react";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import About from "./components/about";
import Cards from "./components/cards";
import Minicards from "./components/minicards";

export default function Home() {
  return (
    <div className="Homepage">
      <BackgroundVedio />
      <div id="main">
        <div id="main-content">
          <h1>EAT. DRINK. PLAY.</h1>
          <h2>Welcome to Sidcup Family Golf!</h2>
          <p>
            Sidcup Family Golf is a Toptracer driving range and crazy golf venue
            in Sidcup, South East London. Passionate about technology, player
            development and making golf fun and accessible to everyone.
          </p>
          <div id="arrow">
            <FaArrowDownLong className="i" />
          </div>
        </div>

        <div id="section2">
          <div id="headline">
            <div className="headline-in">
              <h4>Toptracer Range</h4>
              <h4>Adventure Golf</h4>
              <h4>Golf Lessons</h4>
              <h4>Coffee Shop</h4>
              <h4>Leagues</h4>
            </div>
            <div className="headline-in">
              <h4>Toptracer Range</h4>
              <h4>Adventure Golf</h4>
              <h4>Golf Lessons</h4>
              <h4>Coffee Shop</h4>
              <h4>Leagues</h4>
            </div>
          </div>

          {/* about */}
          <About />

          {/* cards */}
          <Cards />

          <div id="green-div">
            <Image
              alt="logo"
              width={100}
              height={50}
              src="/Assests/dots-side (1).svg"
            />

            <h4>
              Sign up for Sidcup News and Special Offers Straight to Your Inbox
            </h4>
            <Image
              alt="logo"
              width={100}
              height={50}
              src="/Assests/dots-side.svg"
            />
          </div>

{/* para */}
<div id="setionPara">
                <p>
                  Excellent couple of hours, relax and enjoy in the fun. Staff were
                  accommodating, friendly and very helpful. Café on site for
                  refreshments etc. Will keep children enterntained during the holidays.
                  Worth a visit if you haven’t been.
                </p>
                <img
                  id="colon1"
                  src="Assests/quote-left.svg"
                  alt=""
                />
                <img
                  id="colon2"
                  src="Assests/quote-right.svg"
                  alt=""
                />
              </div>
{/* section-cards */}
             
       < Minicards/>
            {/* <Footer/> */}

        </div>
      </div>
    </div>
  );
}
