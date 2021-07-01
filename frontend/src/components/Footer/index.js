import React from 'react'
import { NavLink, Link } from "react-router-dom"
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
                        <NavLink to="/about" style={{textDecoration:"none"}}>Investors</NavLink>
                </div>

            </div>
                <div className="host-container">
                    <div>
                        <h3>HOST</h3>
                    </div>

                    {/* <HostBathroomModal/> */}
                    <NavLink to="/new" activeStyle={{ color: 'red' }} style={{textDecoration:"none"}}>Share Your Loo</NavLink>

                    {/* <div>
                        <Link to="/host" style={{textDecoration:"none"}}>Responsible hosting</Link>
                    </div> */}
                </div>


                <div className="social-media-container">

                    <div className="github-link">
                    <a href="https://www.instagram.com"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-github-alt" style={{fontSize: '3em'}}></i></a>


                    </div>


                    <div className="instagram-link">
                    <a href="https://www.instagram.com"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-instagram" style={{fontSize: '3em'}}></i></a>
                    </div>



                    <div className="instagram-link">
                    <a href="https://www.facebook.com"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-facebook" style={{fontSize: '3em'}}></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
{/* <i class="fab fa-github-alt" style={{fontSize: '3em'}}></i>
<i class="fab fa-linkedin" style={{fontSize: '3em'}}></i> */}
