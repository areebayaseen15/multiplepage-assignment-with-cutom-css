import React from "react";
import Image from "next/image";
import Minicards from "../components/minicards";
import Button from "../components/Button";

const Events = () => {
  return (
    <div id="page">
      <div id="page-1">
        <div className="container">
          <div className="image-section">
            <Image
              alt="img"
              width={5000}
              height={1000}
              src="/Assests/events.webp"
              className="golf"
            />
          </div>
          <div className="text-section">
            <h1>SFG Toptracer</h1>
            <h2>Events</h2>
            <p>
              Compete against other range goers in various game types on our
              Toptracer range. Keep an eye out on our socials, website and on
              the range for upcoming competitions.
            </p>
          </div>
        </div>
      </div>

      {/* events */}
      <div className="About">
        <div id="about-us">
          <div className="img">
            <Image
              alt="logo"
              width={100}
              height={50}
              src="/Assests/download.jpeg"
            />
            <Image
              alt="logo"
              width={100}
              height={50}
              src="/Assests/images.jpeg"
            />
          </div>
          <div id="about-us-in">
            <h3>SFG Events</h3>
            <p>
              We want to unleash your inner competitive golfer…Leagues are a set
              of weekly, biweekly or monthly competitions where you have the
              opportunity to go head-to-head with other likeminded golfers and
              battle it out for the top spot! The game modes consist of Nearest
              the Pin, Longest Drive, Approach Challenge and Points Game
              although, we may throw in the occasional virtual golf game at St
              Andrews.
            </p>
          </div>
        </div>
      </div>

      {/* greendiv */}
      <div className="greendiv" id="green-div">
        <Image
          alt="logo"
          width={100}
          height={50}
          src="/Assests/dots-side (1).svg"
        />

        <h4>🏆 Leaderboard Coming Soon 🏆</h4>
        <Image
          alt="logo"
          width={100}
          height={50}
          src="/Assests/dots-side.svg"
        />
      </div>

      {/* section-cards */}

      <Minicards />
    </div>
  );
};

export default Events;
