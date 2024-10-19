import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
import play_icon1 from '../../assets/play_icon1.png'

const About = ({setPlayerState}) => {
  return (
    <div className='about'>
     <div className="about-left">
      <img src={about_img} alt="" className='about-img' />
      <img src={play_icon1} alt="" className='play-icon' onClick={() => {setPlayerState(true)}} />
      </div> 
     <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow Leaders Today</h2>
      <p>Embark on a transformative educational journey with our university comprehensive education programs. our catting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.</p>
      <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, school and communities. </p>
      <p>Whether you aspire to become a teacher, administrator, counselor or educational leader our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in shaping the future of deucation.</p>
     </div>
    </div>
  )
}

export default About