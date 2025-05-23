import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="info-item">
            <img src="images/location.png" alt="Location" />
            <p>
              3-601/2 First Floor, Pedda Golconda, Shamshabad, Hyderabad, India
              – 501218
            </p>
          </div>
          <div className="info-item">
            <img src="images/phone.png" alt="Phone" />
            <p>+91 7207149900</p>
          </div>
          <div className="info-item">
            <img src="images/mail.png" alt="Email" />
            <p>info@parwahindustries.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
