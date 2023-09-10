import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/12.jpg"
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Companies from "../components/Companies";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero"
        heroImg={img1}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan" url="/" btnClass="show"/>
        <Companies/>
        <Destination/>
        <Footer/>
        </>
       
    )
}

export default Home;




