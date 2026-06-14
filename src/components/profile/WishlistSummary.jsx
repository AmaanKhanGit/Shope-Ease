import { Link } from "react-router-dom";
import "./WishlistSummary.css";
import { useSelector } from "react-redux";

const WishlistSummary = () => {
  const { wishlist } = useSelector((store) => store.wishlist);

  return (
    <div className="wishlist-summary">
      <div className="wishlist-icon">
        <i className="bi bi-heart-fill"></i>
      </div>

      <div className="wishlist-details">
        <h3>Wishlist</h3>
        <p>{wishlist.length} Items Saved</p>
      </div>
      <Link to="/wishlist">
        View <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  );
};

export default WishlistSummary;
