import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img4 from "../assets/9.jpg";
import Footer from "../components/Footer";

function Service(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid"
        heroImg={img4}
        title="Service"
        btnClass="hide"/>
        <Footer/>
        </>
    )
}

export default Service;