import React from 'react'
import { NavLink, Link } from "react-router-dom"
import './Footer.css'

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
                        <Link to="/about" className= "new" style={{textDecoration:"none"}}>How Unkobnb Works</Link>
                    </div>

                    <div>
                        <NavLink to="/why" className= "new" style={{textDecoration:"none"}}>Why</NavLink>
                </div>

            </div>
                <div className="host-container">
                    <div>
                        <h3>HOST</h3>
                    </div>
                    {/* <HostBathroomModal/> */}
                    <NavLink to="/new" className="new"
                    // style={{textDecoration:"none"}}
                    >Share Your Loo</NavLink>
                  
                </div>


                <div className="social-media-container">
                    <div className="github-link">
                    <a href="https://mimike.github.io"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-github-alt" style={{fontSize: '3em'}}></i></a>

                    </div>

                    <div className="instagram-link">
                    <a href="https://www.instagram.com"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-instagram" style={{fontSize: '3em'}}></i></a>
                    </div>

                    <div className="instagram-link">
                    <a href="https://www.linkedin.com/in/mimi-ke-a7976031/"  style={{textDecoration:'none', fontSize:"1.1em"}}><i class="fab fa-linkedin-in" style={{fontSize: '3em'}}></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
