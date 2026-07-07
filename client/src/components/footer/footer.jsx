import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>🍽 Smart<span>Dine</span></h2>

          <p>
            Discover the best restaurants, reserve tables,
            and enjoy unforgettable dining experiences.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Restaurants</a>
          <a href="#">Categories</a>
          <a href="#">Bookings</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Bangalore, India</p>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaEnvelope /> support@smartdine.com</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaLinkedin />

            <FaTwitter />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 SmartDine. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;