import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Qui suis-je ?</h1>
        <p>
            Jeune développeur passionné par les technologies émergentes,
            je me spécialise dans la sécurité informatique et le cloud.
            Ayant été président du Conseil de Vie Lycéenne, j'ai pu développer des
            compétences en leadership et en gestion de projet.
            En dehors de la programmation, je suis un sportif assidu pratiquant le badminton,
            et j'ai un fort intérêt pour la littérature ainsi que les jeux vidéo,
            qui m'offrent des moments de créativité et de réflexion. 
            Je suis actuellement en recherche d'une alternance pour continuer
            à approfondir mes connaissances et contribuer à des projets innovants.
        </p>
        <Link to="/contact">
        <button className="btn">Me Contacter</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img2} className="img" alt = "true" />
                </div>
                <div className="img-stack bot">
                    <img src={img3} className="img" alt = "true" />
                </div>
            </div>
        </div>


    </div>
  )
}

export default AboutContent