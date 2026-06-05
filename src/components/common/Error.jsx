import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div className="error-state">
      <img
        src="/Error image.png"
        alt="Connection error"
        className="error-img"
      />

      <h2>Unable to Load Products</h2>

      <p>
        We’re having trouble connecting right now. Check your internet
        connection and try again.
      </p>

      <button className="retry-btn" onClick={() => navigate(0)}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
