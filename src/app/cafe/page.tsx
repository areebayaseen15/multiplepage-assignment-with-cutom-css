import React from "react";
import Image from "next/image";
import Nav from "../components/nav";
import Food from "../components/food";
import Button from "../components/Button";
import Minicards from "../components/minicards";

const Cafe = () => {
  return (
    <div id="page">
      <Nav />

      <div id="page-1">
        <div className="container">
        <div className="image-section">
            <Image
              alt="img"
              width={500}
              height={500}
              src="/Assests/hero-cafe-1536x1024 (1).webp"
            />
            </div>
          <div className="text-section">
            <h1>MR MULLIGANS</h1>
            <h2>CAFÉ</h2>
            <p>
              Situated between the driving range and Mr Mulligans Dino Golf,
              this wonderful relaxing spot is open from 9:30 am.
            </p>
            <div className="open-info">OPEN: Monday - Sunday from 9:30am</div>
          </div>
     
            {/* <div id="arrow">
              <i className="ri-arrow-down-line"></i>
            </div> */}
          </div>
        </div>

        <div id="page2">
        {/* <Food/> */}
{/* para */}
<div id="setionPara">
  <h1>FOOD AND DRINKS</h1>
<p>
    From coffee to pizzas, refuel between practice and games of crazy golf. Don’t fore-get! There’s even something a little stronger for the adults!

With hot tasty meals, relaxing snacks and cool refreshing drinks, take a look at our wide range of food and drink options below.
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
</div>
             
           
     {/* menue      */}
     <div id='golfcontent'>
         <h1>Breakfasts</h1>
      <div id='lessons'>
        <h4>Breakfast</h4>
      <h4>Mains</h4>
      <h4>Drinks</h4>
      <h4>Sharing Boards</h4></div>

      <div id='golfCard'>
   
      <img
                  id="colon2"
                  src="/Assests/breakfast.avif"
                  alt=""
                />
                   <div>
             <h2>Breakfasts</h2> 
       <p>Served All Day</p>
       <hr />
       <div id="menue">
       <ul>
       <li>English Breakfast Baguette</li>
       <li>Veggie Breakfast Baguette</li>
       <li>Bacon Baguette</li>
        <li>Sausage Baguette</li>
        </ul>

        <ul>
          <li>£10.00</li>
          <li>£7.50</li>
          <li>£6.00</li>
          <li>£6.00</li>
          <li>£6.00</li>
        </ul>
        </div>
      </div>
  
      
             </div>
             <div 
             
             id='btncard' className='bg-black text-white  w-[20em] p-[1em] pl-[7em] items-center text-2xl font-bold  ml-10 mb-10 rounded-full border border-[#95C11E] mt-20 hover:bg-[#95C11E]'
             >
        <Button text={"Download"} />

        </div>

             </div>
                    
    </div>
  );
};

export default Cafe;
