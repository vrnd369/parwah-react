import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/quality">Quality</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <img src="/images/location.png" alt="Location" />
              3-601/2 First Floor, Pedda Golconda, Shamshabad, Hyderabad, India
              – 501218
            </p>
            <p>
              <img src="/images/phone.png" alt="Phone" />
              +91 7207149900
            </p>
            <p>
              <img src="/images/mail.png" alt="Email" />
              info@parwahindustries.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 Parwah Industries. All Rights Reserved.|Powered By VRND
            Business Solutions|
          </p>
{/*           <div className="social-icons">
            <a href="#">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
