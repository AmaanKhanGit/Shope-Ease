import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navgate = useNavigate();

  return (
    <div className="empty-cart">
      <img src="/empty-cart.png" alt="empty cart" />

      <h2>No such an item in cart</h2>

      <p>Looks like your cart is empty.</p>

      <button className="shop-btn" onClick={() => navgate("/products")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
