import logo from './assets/logo2.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer(){

    return(
        <footer>
            <div className='content'>
                <img src={logo} alt="logo" />
            <div>
                <h3>Doormat Navigation</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservations</a>
                <a href="#">Order Online</a>
                <a href="#">Login</a>
                <div className='lastItem'/>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone Number</p>
                <a href="mailto:pippo@libero.it">E-mail</a>
                <div className='lastItem'/>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <a href="https://www.facebook.com" target='_blank'><FaFacebook /> Facebook</a>
                <a href="https://www.instagram.com" target='_blank'><FaInstagram /> Instagram</a>
                <div className='lastItem'/>
            </div>
            </div>
            

        </footer>

    );


}

export default Footer;