import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar/>
     <Hero 
     cName="hero"
     img={AboutImg}
     title="Service"
     text=""
     buttonText=""
     url="/"
     btnClass="hide"
     />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
