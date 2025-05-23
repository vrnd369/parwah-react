import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Our Company</h2>
        <div className="about-flex">
          <div className="about-image">
            <img src="/images/about.jpg" alt="About Parwah Industries" />
          </div>
          <div className="about-text">
            <p>
              Parwah Industries is a leading multi-brand conglomerate that has
              been at the forefront of international trade and brand
              distribution for over 12 years. With a deep-rooted commitment to
              excellence, we specialize in bringing established and trusted
              brands to new markets, particularly across the Gulf and European
              regions.
            </p>
            <p>
              As the parent company of well-recognized names such as Ottoman
              Mitten, Guch Doors, Banat India, and Vinsa, Parwah Industries
              plays a pivotal role in sourcing high-quality products through
              global trade channels and delivering them to discerning customers
              across diverse industries—including home textiles, premium doors,
              fashion, and lifestyle.
            </p>
            <p>
              For over a decade, Parwah Industries has built a reputation for
              trust, consistency, and market intelligence, positioning us as a
              preferred partner for international brand expansion and
              cross-border distribution. Our mission is clear: to bridge the gap
              between global quality and regional demand through seamless,
              ethical, and efficient trade practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
