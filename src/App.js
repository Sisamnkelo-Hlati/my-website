

import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"

import Prices from "./components/Prices.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div >
      <Header/>
      <NavBar/>
     <Hero/>
     <Services/>
     <About/>
     <Projects/>
     <Prices/>
     <Contact/>
     <Footer/> 
    </div>
  );
}

export default App;
