import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img3 from "../assets/2.jpg";
import Footer from "../components/Footer";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid"
        heroImg={img3}
        title="Contact"
        btnClass="hide"/>
        <Footer/>
        </>
    )
}

export default Contact;