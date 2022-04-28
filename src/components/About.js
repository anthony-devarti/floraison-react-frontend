import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function About(){
    return (
        <div className="about">
            <div className="content">
            <h2>About Us</h2>
            <p>La Floraison is a small bakery serving Lexington, Ky and the surrounding areas.  We specialize in business to business and event planning orders. Feel free to check us out on social media for more information about our offerings and for photos of our previous work</p>
                <h3>Follow us on social media!</h3>
            <div className="icons">
                <FontAwesomeIcon href="#" icon={faInstagram} inverse size="5x"/>
                <FontAwesomeIcon href="#" icon={faFacebook} inverse size="5x"/>
            </div>
            </div>
        </div> 
    )
}