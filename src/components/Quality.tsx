import React from "react";
import "../styles/Quality.css";

const Quality: React.FC = () => {
  return (
    <section id="quality" className="quality">
      <div className="container">
        <h2>Our Commitment to Quality</h2>
        <p>
          At Parwah Industries, quality is at the core of everything we do. We
          implement rigorous quality control measures at every stage of
          production to ensure our products meet the highest standards.
        </p>
        <div className="quality-features">
          <div className="feature">
            <img src="images/certificate.png" alt="Certified Processes" />
            <h3>Certified Processes</h3>
          </div>
          <div className="feature">
            <img src="images/quality.png" alt="Quality Testing" />
            <h3>Quality Testing</h3>
          </div>
          <div className="feature">
            <img src="images/skilled.png" alt="Skilled Workforce" />
            <h3>Skilled Workforce</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
