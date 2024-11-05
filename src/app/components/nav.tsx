import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';


const Nav = () => {
  return (
    <div id="nav">
    <Link href="/">
    <Image
    alt="logo"
    width={100}
    height={50}
    src="/Assests/logo-white.svg" 
  /></Link>
    <Link href="/ToptracerRange"><h4>Toptracer RANGE</h4></Link>
    <Link href="/Adventure"><h4>Adventure Golf</h4></Link>
    <Link href="/GolfLesssons"><h4>Golf Lessons</h4></Link>
    <Link href="/cafe"><h4>Coffee Shop</h4></Link>
    <Link href="/Leagues"><h4>Leagues</h4></Link>
      <div id="btn">
          {/* <button><a href="#">BOOK RANGE</a></button>
          <button><a href="#">BOOK GOLF</a></button> */}
          <Button text={'BOOK RANGE'}/>
          <Button text={'BOOK GOLF'}/>
      </div>
  </div>
  )
}

export default Nav
