import React from 'react'
import { Link } from "react-router-dom"
function Footer(){
    return (
        <>
            <div className="footer-container" style={{
                backgroundImage: `url(images/unko4.jpeg)`
            }}>
                <div>
                    <h2>About</h2>
                </div>

                <div>
                    <li><Link to="/about">How unkobnb works</Link></li>
                </div>

                <div>
                    <li><Link to="/about">Investors</Link></li>
                </div>

                <div>
                    <h2>Host</h2>
                </div>

                <div>

                    <li><Link to="/host">Host your bathroom</Link></li>
                </div>

                <div>

                    <li><Link to="/host">Responsible hosting</Link></li>
                </div>

                <div>
                    <i class="fab fa-facebook"></i>
                    <a href="https://www.facebook.com">facebook</a>
                </div>

                <div>
                    <i class="fab fa-instagram"></i>
                    <a href="https://www.instagram.com">instagram</a>
                </div>
            </div>
        </>
    )
}

export default Footer;
