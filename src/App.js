import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div >
      <NavBar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/> 
    </div>
  );
}

export default App;