import { Link } from "react-router-dom";
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
          <h3>Developed By:</h3>
          <div className="footer-info">
            <p> Amaan Khan</p>
            <p> Web Development, UI/UX Design, React</p>
            <div className="icons">
              <a href="https://github.com/AmaanKhanGit" target="_blank">
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amaan-khan-774657383/"
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
