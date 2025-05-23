import React from "react";
import "../styles/Products.css";

const Products: React.FC = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Brands</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src="images/banat.png" alt="Banat" />
            <h3>Banat</h3>
            <p>
              Personal Care & Hygiene Trusted brand for toothbrushes, grooming
              tools, and cleaning products—exported widely to Europe for
              daily essentials.
            </p>
          </div>
          <div className="product-item">
            <img src="images/VINSA .png" alt="Vinsa" />
            <h3>Vinsa</h3>
            <p>
              Modern Fashion & Lifestyle Stylish toothbrushes that blend comfort
              and contemporary design—crafted for today’s global fashion trends.
            </p>
          </div>
          <div className="product-item">
            <img src="images/ottoman.png" alt="Ottoman Mitten" />
            <h3>Ottoman Mitten</h3>
            <p>
              Luxury Home Furnishings Premium curtains, upholstery, and home
              textiles inspired by Ottoman design—perfect for elegant interiors
              across Gulf markets.
            </p>
          </div>
          <div className="product-item">
            <img src="images/guch doors.png" alt="Guch Doors" />
            <h3>Guch Doors</h3>
            <p>
              Premium Doors for Modern Spaces High-quality wooden and designer
              doors crafted for durability, style, and security—trusted across
              residential and commercial projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
