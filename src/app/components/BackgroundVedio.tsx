import React from 'react'

const BackgroundVedio = () => {
  return (
       <div className="video-bg">
      <video autoPlay loop muted playsInline>
        <source src="/Assests/vedioG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BackgroundVedio
