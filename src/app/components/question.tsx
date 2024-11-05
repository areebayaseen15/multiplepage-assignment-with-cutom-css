import React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'

const Question = () => {
  return (
    <div className="ques">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <li> <h4>01. CAN I RENT CLUBS? </h4>   <FaArrowDownLong className="i" /></li>
        <hr />
        <li> <h4>02. CAN I USE THE SHORT GAME AREA??</h4> <FaArrowDownLong className="i" /></li>
        <hr />
    </div>
  )
}

export default Question
