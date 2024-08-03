import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services"

function App() {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <div className="h-20"></div>
      <Footer/>
    </div>
  );
}

export default App;
