import { useNavigate } from "react-router-dom";
import "./EmptyList.css";

const EmptyList = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="empty-wishlist">
        <img
          src="/empty-wishlist.png"
          alt="Empty Wishlist"
          className="empty-wishlist-img"
        />

        <h2>Your wishlist is empty</h2>

        <p>
          Looks like you haven't added anything to your wishlist yet.
          <br />
          Explore products and save your favorites for later.
        </p>

        <button className="browse-btn" onClick={() => navigate("/products")}>
          Browse Products
        </button>
      </div>
    </>
  );
};

export default EmptyList;
