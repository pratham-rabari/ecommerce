import React from 'react'
import './Style/Footer.css'

const Footer = () => {
  return (
    <div>
          <footer>
       <div>
            <span className="logo">iTechnology</span>
       </div>

       <div className="row">
            <div className="col-3">                
                <div className="link-cat">
                    <span className="footer-toggle"></span>
                    <span className="footer-cat">Solution</span>
                </div>
                <ul className="footer-cat-links">
                    <li><a href=""><span>Interprise App Development</span></a></li>
                    <li><a href=""><span>Android App Development</span></a></li>
                    <li><a href=""><span>ios App Development</span></a></li>
                </ul>
            </div>
            <div className="col-3">
                <div className="link-cat">
                    <span className="footer-toggle"></span>
                    <span className="footer-cat">Industries</span>
                </div>
                <ul className="footer-cat-links">
                    <li><a href=""><span>Healthcare</span></a></li>
                    <li><a href=""><span>Sports</span></a></li>
                    <li><a href=""><span>ECommerce</span></a></li>
                    <li><a href=""><span>Construction</span></a></li>
                    <li><a href=""><span>Club</span></a></li>
                </ul>
            </div>
            <div className="col-3">
                <div className="link-cat" >
                    <span className="footer-toggle"></span>
                    <span className="footer-cat">Quick Links</span>
                </div>
                <ul className="footer-cat-links">
                    <li><a href=""><span>Reviews</span></a></li>
                    <li><a href=""><span>Terms & Condition</span></a></li>
                    <li><a href=""><span>Disclaimer</span></a></li>
                    <li><a href=""><span>Site Map</span></a></li>
                </ul>
            </div>
            <div className="col-3" id="newsletter">
                <span>Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>
                
                <div className="social-links social-2">
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-tumblr"></i></a>
                    <a href=""><i className="fab fa-reddit-alien"></i></a>
                </div>

                <div id="address">
                    <span>Office Location</span>
                    <ul>
                        <li>
                            <i className="far fa-building"></i>
                            <div>Los Angeles<br/>
                            Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                        </li>
                        <li>
                            <i className="fas fa-gopuram"></i>
                            <div>Delhi<br/>
                            Office 150B, Behind Sana Gate Char Bhuja Tower, Station Road, Delhi</div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="social-links social-1 col-6">
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-linkedin-in"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-tumblr"></i></a>
                <a href=""><i className="fab fa-reddit-alien"></i></a>
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2019-2020
       </div>
       <div id="owner">
           <span>
               Designed by <a href="https://www.codingtuting.com">CodingTuting.Com</a>
           </span>
       </div>
    </footer>
    </div>
  )
}

export default Footer
