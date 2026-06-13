import { Link } from "react-router-dom";
import "./CartSummary.css";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div className="profile-cart-summary">
      <div className="cart-icon">
        <i className="bi bi-cart3"></i>
      </div>

      <div className="cart-details">
        <h3>Cart</h3>
        <p>{cartItems.length} Items In Cart</p>
      </div>
      <Link to="/cart">
        View Cart <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  );
};

export default CartSummary;
