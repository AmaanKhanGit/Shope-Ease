import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="image-placeholder">
          {/* Add your image here */}
          <img src="/not-found.png" alt="Page Not Found" />
        </div>

        <h1>Woh! where are you going?</h1>

        <p>
          Looks like the page you're looking for doesn't exist or has been
          moved.
        </p>

        <Link to="/" className="home-btn">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
