import { useSelector } from "react-redux";
import "./CartSummary.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const totalItem = cartItems.reduce((total, item) => total + item.quantity, 0);
  const price = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const discount = price * 0.1;
  const totalPrice = price - discount;

  const { isAuthenticated } = useSelector((store) => store.user);
  const nav = useNavigate();

  const handleProceed = () => {
    if (!isAuthenticated) {
      nav("/login-signup");
      return;
    }
    toast("Seriously!", {
      icon: "🫤",
      position: "top-center",
    });
  };

  return (
    <>
      <div className="cart-summary cart-content">
        <div className="cart-summary-box">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>{totalItem}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${price.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span>-10%</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={handleProceed}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
