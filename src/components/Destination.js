import img5 from "../assets/5.jpg";
import img8 from "../assets/8.jpg";
import img6 from "../assets/6.jpg";
import img9 from "../assets/9.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData className="first-des"
            heading="Taal Valcano, Batangas"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at est vel nunc ullamcorper tincidunt. Nullam ullamcorper, quam quis lacinia pharetra, metus mi commodo est, sed scelerisque justo dolor sit amet justo. Suspendisse potenti. Fusce vulputate vestibulum mi, in eleifend metus vulputate nec. Nulla facilisi. Maecenas luctus, quam ut fermentum dictum, justo dui scelerisque quam, non aliquet ex lorem id justo. Praesent eu efficitur nisl. Aenean tristique justo et felis finibus interdum. Nunc nec arcu ut purus vehicula fermentum."
            img21={img5}
            img22={img8}/>
            <DestinationData className="first-des-reverse"
            heading="Taal Valcano, Batangas"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at est vel nunc ullamcorper tincidunt. Nullam ullamcorper, quam quis lacinia pharetra, metus mi commodo est, sed scelerisque justo dolor sit amet justo. Suspendisse potenti. Fusce vulputate vestibulum mi, in eleifend metus vulputate nec. Nulla facilisi. Maecenas luctus, quam ut fermentum dictum, justo dui scelerisque quam, non aliquet ex lorem id justo. Praesent eu efficitur nisl. Aenean tristique justo et felis finibus interdum. Nunc nec arcu ut purus vehicula fermentum."
            img21={img6}
            img22={img9}/>
        </div>
    )
}

export default Destination;