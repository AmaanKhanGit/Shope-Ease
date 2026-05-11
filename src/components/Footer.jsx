import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Reach Us</h3>
          <div className="footer-info">
            <p>
              <strong>Address:</strong> 177A Bleacker Street
            </p>
            <p>
              <strong>Phone:</strong> +123 456 789
            </p>
            <p>
              <strong>Email:</strong> example@gmail.com
            </p>
            <p>
              <strong>View </strong>
              <a href="contact-us.html" className="more">
                more..
              </a>
            </p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="products.html">Products</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Developed By:</h3>
          <div className="footer-info">
            <p> Amaan Khan</p>
            <p> Web Development, UI/UX Design, React</p>
            <div className="icons">
              <a href="https://github.com/AmaanKhanGit" target="_blank">
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amaan-khan-036b9a32a"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/AmaanKhanX" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Shope Ease. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
