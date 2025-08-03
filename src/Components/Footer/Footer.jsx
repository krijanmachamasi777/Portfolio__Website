import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_copy.svg'
import github from '../../assets/github.svg'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a frontend developer from , Nepal with 1 years of experience .</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/krizan.machamasi" target='_blank'> <img src={facebook_icon} alt="" /></a>
                        <a href="https://www.instagram.com/krijanmachamasi/" target='_blank' ><img src={instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/in/krijan-machamasi-b642512aa/" target='_blank'> <img src={linkedin} alt="" /></a>
                        <a href="https://github.com/krijanmachamasi777" target='_blank'><img src={github} alt="" /></a>

                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Krijan Machamasi . All rights reserved .</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p></div>
            </div>
        </div>
    )
}

export default Footer
