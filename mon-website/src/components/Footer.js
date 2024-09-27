import { FaGithub, FaHome, FaLinkedin, FaMailBulk,FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2Rem"}}/>
                    <div>
                        <p>335 Boulevard des Cigales</p>
                        <p>13600 La Ciotat</p>
                    </div>
                </div>
                <div className ="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2Rem"}}/>
                    0650703276</h4>
                </div>
                <div className ="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2Rem"}}/>
                    morezsacha@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Social Media</h4>
                <div className="social">
                <a href="https://www.linkedin.com/in/sacha-morez-56a05017b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1Rem"}}/>
                </a>    
                <a href="https://github.com/MorezSacha" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:"#fff",marginRight:"1Rem"}}/>
                </a>
                
                </div>
            </div>
        </div>
    </div>
  )

}

export default Footer