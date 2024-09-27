import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'

const CV = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CV." text ="Découvrez mon parcours professionnel et mes compétences"></HeroImg2>
      <Footer />
    </div>
  )
}

export default CV