import React, { useEffect } from 'react';
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import CV from "./routes/CV"
import Contact from "./routes/Contact"
import { Route, Routes} from "react-router-dom"



function App() {
  useEffect(() => {
    document.title = "Portfolio Sacha Morez";  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
