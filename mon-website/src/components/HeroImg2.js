import "./HeroImg2Styles.css";
import React from 'react';
import { useLocation } from 'react-router-dom';
import cvPdf from "../assets/CV-Sacha-3.pdf";

const HeroImg2 = (props) => {
    const location = useLocation();

    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                {location.pathname.endsWith('/CV') && (
                <a href={cvPdf} download="../assets/CV-Sacha-3.pdf" className="btn" style={{ marginTop: '20px' }}>
                    Télécharger mon CV
                </a>)}
            </div>
        </div>
    );
}

export default HeroImg2;
