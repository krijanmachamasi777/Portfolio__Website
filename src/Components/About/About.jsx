import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="https://ik.imagekit.io/bnpgsmexh/Protfolio%20projects/mypic.jpg?updatedAt=1758105448803" alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over 1 year of experience . </p>
                        <p>My passion for frontend development goes beyond writing code — it’s about crafting seamless, interactive experiences that connect design with functionality and bring ideas to life on every screen.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div><hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div><hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div >
    )
}

export default About
