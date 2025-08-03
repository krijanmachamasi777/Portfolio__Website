import React from 'react'
import './hero.css'
import profile_img from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Krijan Machamasi ,</span> frontend developer based in Nepal.</h1>
      <p>I am a frontend developer from Bhakapur,Nepal with 1 years of experience in mulitiple companies .</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
