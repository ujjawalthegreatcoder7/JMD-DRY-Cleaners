import "./navbar.css";

const Footer = () => {
  return (
    <>
      <footer className="custom-footer">
        <div className="footer-container">

          {/* Address */}
          <div className="footer-box">
            <div className="footer-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>589/20, Shop No. 1</p>
              <p>Basai Road, Vir Nagar</p>
              <p>Model Town, Sector 8</p>
              <p>Gurugram, Haryana - 122001</p>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-box">
            <div className="footer-icon">📞</div>
            <div>
              <h4>Contact</h4>
              <p><strong>Phone:</strong> +91 9319354648</p>
              <p><strong>Email:</strong> ujjawalarora777@gmail.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="footer-box">
            <div className="footer-icon">🕒</div>
            <div>
              <h4>Opening Hours</h4>
              <p><strong>Mon - Sat:</strong> 11:00 AM - 11:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-box">
            <div>
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Twitter">X</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">◎</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>Yummy</strong>. All Rights Reserved.</p>
          <p className="des">
            Designed by <span>UJJAWAL ARORA</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;