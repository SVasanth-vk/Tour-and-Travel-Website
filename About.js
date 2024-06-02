import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
     <Navbar/>
     <Hero 
     cName="hero"
     img={AboutImg}
     title="About US"
     text=""
     buttonText=""
     url="/"
     btnClass="none"
     />
        <AboutUs />  
    <Footer />
    </>
  );
}

export default About;