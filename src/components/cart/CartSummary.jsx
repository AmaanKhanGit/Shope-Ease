import "./CartSummary.css";

const CartSummary = () => {
  return (
    <>
      <div className="cart-summary cart-content">
        <div className="cart-summary-box">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>3</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹2999</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span>-₹300</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹2999</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
