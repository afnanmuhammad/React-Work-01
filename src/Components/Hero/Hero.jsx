import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and emperiences needed to excel in the dynamic filed of education</p>
        <button className='btn'>
          Explore more
           <img src={arrow_icon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default Hero