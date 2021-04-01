import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import HostBathroomModal from "./HostBathroomModal";

function Footer(){
    return (
        <>
            <div className="footer-container" style={{
                backgroundImage: `url(images/unko4.jpeg)`
            }}>
                <div className="about-container">
                    <div>
                        <h3>ABOUT</h3>
                    </div>

                    <div>
                        <Link to="/about" style={{textDecoration:"none"}}>How unkobnb works</Link>
                    </div>

                    <div>
                        <Link to="/about" style={{textDecoration:"none"}}>Investors</Link>
                    </div>
                </div>

                <div className="host-container">
                    <div>
                        <h3>HOST</h3>
                    </div>

                    <HostBathroomModal/>

                    <div>
                        <Link to="/host" style={{textDecoration:"none"}}>Responsible hosting</Link>
                    </div>
                </div>


                <div className="social-media-container">

                    <div className="facebook-link">
                        <i class="fab fa-facebook" ></i>
                        <a href="https://www.facebook.com" style={{textDecoration:"none"}}>    facebook</a>
                    </div>

                    <div className="instagram-link">
                        <i class="fab fa-instagram"></i>
                        <a href="https://www.instagram.com" style={{textDecoration:"none"}}>     instagram</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;
