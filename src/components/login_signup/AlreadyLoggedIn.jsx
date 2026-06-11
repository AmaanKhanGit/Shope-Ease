import { Link } from "react-router-dom";
import "./AlreadyLoggedIn.css";

const AlreadyLoggedIn = () => {
  return (
    <div className="alreadyLoggedIn">
      <div className="loggedInCard">
        <div className="successIcon">✓</div>

        <h2>You are already logged in</h2>

        <p>
          Your account is active. Continue shopping and
          explore the latest products.
        </p>

        <Link to="/" className="continueBtn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default AlreadyLoggedIn;