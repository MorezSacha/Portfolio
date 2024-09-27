import "./HeroImgStyles.css";

import React from 'react'
import img1 from "../assets/img1.jpg"
import { Link } from "react-router-dom";
 

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            { <img className="into-img"
            src={img1} alt ="img1"/> }
        </div>
        <div className = "content">
          <p>Sacha Morez</p>
          <h1>Developer</h1>
          <div>
            <Link to="/CV" className="btn">CV</Link>
            <Link to="/contact" className="btn btn-light">Me Contacter</Link>      
          </div>
        </div>
    </div>
  )
}

export default HeroImg