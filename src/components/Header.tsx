import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Header: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/Logo.png" alt="Parwah Industries Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Our Brands</Link>
            </li>
            {/* <li>
              <Link to="/quality">Quality</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
