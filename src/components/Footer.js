import { Link } from "react-router";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import logo from '../assets/logo2.png';

function Footer(){

    const paddingContactsItem ={paddingBottom:"0.5em"}

    return(
        <footer>
            <div className='content'>
                <img src={logo} alt="logo" />
            <div>
                <h3>Site Map</h3>
                <Link to="/">Home</Link>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <Link to="/booking">Reservations</Link>
                {/* <a href="#">Order Online</a> */}
                <a href="#">Login</a>
                <div className='lastItem'/>
            </div>
            <div>
                <h3>Contact</h3>
                <p style={paddingContactsItem}>1600 W Grand Ave <br/>
                    Chicago, IL <br/>60622</p>
                <p style={paddingContactsItem}>(123) 456 - 789012</p>
                <a style={paddingContactsItem} href="mailto:giuseppe@ranieri.dev">E-mail</a>
                <div className='lastItem'/>
            </div>
            <div>
                <h3>Social Media</h3>
                <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><FaFacebook /> Facebook</a>
                <a href="https://www.instagram.com" target='_blank'rel="noreferrer" ><FaInstagram /> Instagram</a>
                <div className='lastItem'/>
            </div>
            </div>
            

        </footer>

    );


}

export default Footer;