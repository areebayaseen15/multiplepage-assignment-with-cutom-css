import React from 'react'
interface btn{
    text:string;
}
const Button = (props:btn) => {
   
  return (
    <div id='btn'>
      <button className='btn'>{props.text}</button>
    </div>
  )
}

export default Button
